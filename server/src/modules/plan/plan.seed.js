import Plan from "./plan.model.js";

export const seedPlans = async () => {
    const existingPlans = await Plan.countDocuments();

    if (existingPlans > 0) {
        console.log("Plans already seeded");
        return;
    }

    await Plan.insertMany([
        {
            name: "Basic",
            monthlyPrice: 999,
            yearlyPrice: 9999,
            trialDays: 14,
            features: [
                "Basic Dashboard",
                "3 Employees",
                "Product Management"
            ],
            limits: {
                stores: 1,
                employees: 3,
                products: 500
            }
        },
        {
            name: "Pro",
            monthlyPrice: 1999,
            yearlyPrice: 19999,
            trialDays: 14,
            isPopular: true,
            features: [
                "Advanced Dashboard",
                "10 Employees",
                "Inventory Alerts"
            ],
            limits: {
                stores: 1,
                employees: 10,
                products: 5000
            }
        },
        {
            name: "Enterprise",
            monthlyPrice: 3999,
            yearlyPrice: 39999,
            trialDays: 14,
            features: [
                "Unlimited Employees",
                "Multi Store",
                "Priority Support"
            ],
            limits: {
                stores: 10,
                employees: 999,
                products: 999999
            }
        }
    ]);

    console.log("Plans seeded successfully");
};