
const mongoose = require("mongoose");

const tradeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    cryptocurrency: {
      type: String,
      required: true,
      trim: true,
    },

    type: {
      type: String,
      enum: ["buy", "sell"],
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
      min: 0,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    total: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

// 🔍 Index for faster user trade history queries
tradeSchema.index({ user: 1, createdAt: -1 });

module.exports = mongoose.model("Trade", tradeSchema);

