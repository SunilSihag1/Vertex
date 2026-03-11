import * as planService from "./plan.service.js";

export const getPlans = async (req, res) => {
    try {
        const plans = await planService.getAllPlans();

        res.status(200).json({
            success: true,
            data: plans
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch plans"
        });
    }
};

export const getPlan = async (req, res) => {
    try {
        const { id } = req.params;

        const plan = await planService.getPlanById(id);

        if (!plan) {
            return res.status(404).json({
                success: false,
                message: "Plan not found"
            });
        }

        res.status(200).json({
            success: true,
            data: plan
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch plan"
        });
    }
};