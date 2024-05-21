const mongoose = require("mongoose");

const analyticsSchema = new mongoose.Schema({
  impressions: { type: Number, default: 0 },
  clicks: { type: Number, default: 0 },
  conversions: { type: Number, default: 0 },
  budgetSpent: { type: Number, default: 0 }, // New field for budget spent
});

const pastCampaignSchema = new mongoose.Schema({
  name: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  description: { type: String },
  analytics: analyticsSchema, // Embed analytics schema
  budget: { type: Number, default: 0 },
  platform: { type: String }, // e.g., "Facebook", "Google Ads", etc.
  targetAudience: { type: String },
  // Add more fields as needed
}, { timestamps: true });

const PastCampaign = mongoose.model("PastCampaign", pastCampaignSchema);

module.exports = PastCampaign;
