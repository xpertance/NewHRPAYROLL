import mongoose from "mongoose";

const assetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    assetId: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Available", "Assigned", "In Repair", "Damaged", "Lost", "Retired"],
      default: "Available",
    },

    // ✅ Changed here
    assignedTo: {
      type: String, // now accepts "emp001"
      default: null,
    },

    purchaseDate: Date,
    value: Number,
    description: String,
    serialNumber: String,
    vendor: String,
    warrantyExpiry: Date,

    history: [
      {
        action: String,
        date: { type: Date, default: Date.now },

        // You can also change this if needed
        performedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

        details: String,
      },
    ],

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

if (mongoose.models.Asset) {
  delete mongoose.models.Asset;
}

export default mongoose.models.Asset || mongoose.model("Asset", assetSchema);
