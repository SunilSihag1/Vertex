import Plan from "./plan.model.js";

export const getAllPlans = async () => {
    return await Plan.find({ isActive: true }).sort({ monthlyPrice: 1 });
};

export const getPlanById = async (id) => {
    return await Plan.findById(id);
};