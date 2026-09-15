
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    balance: {
      type: Number,
      default: 10000,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

// 🔍 Unique index for faster email lookups
userSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.model("User", userSchema);

