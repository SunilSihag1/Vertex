import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../service/api";

export const INITIAL_FORM = {
    name: "",
    tagline: "",
    category: "",
    currency: "INR",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone ?? "Asia/Kolkata",
};

export const CATEGORIES = [
    "Fashion & Apparel",
    "Electronics",
    "Grocery & Food",
    "Health & Beauty",
    "Home & Furniture",
    "Books & Stationery",
    "Sports & Fitness",
    "Jewellery & Accessories",
    "Toys & Kids",
    "Other",
];

export const CURRENCIES = [
    { code: "INR", label: "₹ Indian Rupee" },
    { code: "USD", label: "$ US Dollar" },
    { code: "EUR", label: "€ Euro" },
    { code: "GBP", label: "£ British Pound" },
];

export function useCreateShop() {
    const navigate = useNavigate();
    const [form, setForm] = useState(INITIAL_FORM);
    const [errors, setErrors] = useState({});
    const [saving, setSaving] = useState(false);
    const [apiError, setApiError] = useState(null);

    const handleChange = ({ target: { name, value } }) => {
        setForm(p => ({ ...p, [name]: value }));
        setErrors(p => ({ ...p, [name]: undefined }));
        setApiError(null);
    };

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = "Shop name is required.";
        else if (form.name.trim().length < 3) e.name = "Must be at least 3 characters.";
        if (!form.category) e.category = "Please select a category.";
        return e;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) { setErrors(errs); return; }

        try {
            setSaving(true);
            await api.post(
                "/stores",
                {
                    name: form.name.trim(),
                    tagline: form.tagline.trim(),
                    category: form.category,
                    currency: form.currency,
                    timezone: form.timezone,
                },
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
                }
            );
            navigate("/settings/shop-profile");
        } catch (err) {
            setApiError(err.response?.data?.message ?? "Failed to create shop. Please try again.");
        } finally {
            setSaving(false);
        }
    };

    return { form, errors, saving, apiError, handleChange, handleSubmit };
}