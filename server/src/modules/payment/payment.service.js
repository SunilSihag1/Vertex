import razorpay from "../../config/razorpay.js";
import planModel from "../plan/plan.model.js";
import paymentModel from "./payment.model.js";


export const createOrder = async (userId, planId, billing) => {

    const plan = await planModel.findById(planId);

    if (!plan) {
        throw new Error("Plan not found");
    }

    const price =
        billing === "monthly"
            ? plan.monthlyPrice
            : plan.yearlyPrice;

    const order = await razorpay.orders.create({
        amount: price * 100,
        currency: "INR",
        receipt: `sub_${Date.now()}`
    });

    await paymentModel.create({
        user_id: userId,
        plan_id: planId,
        billing_cycle: billing,
        amount: price,
        razorpay_order_id: order.id,
        status: "pending"
    });

    return order;
};

export const activatePayment = async (
    orderId,
    paymentId,
    signature
) => {

    const payment = await paymentModel.findOne({
        razorpay_order_id: orderId
    });

    if (!payment) {
        throw new Error("Payment not found");
    }

    payment.status = "success";
    payment.razorpay_payment_id = paymentId;
    payment.razorpay_signature = signature;

    await payment.save();

    return payment;
};

export const failPayment = async (
    orderId,
    errorCode,
    errorReason
) => {

    const payment = await paymentModel.findOne({
        razorpay_order_id: orderId
    });

    if (!payment) {
        throw new Error("Payment not found");
    }

    payment.status = "fail";
    payment.error_code = errorCode;
    payment.error_reason = errorReason;

    await payment.save();

    return payment;
};