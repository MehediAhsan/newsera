import mongoose, { Schema } from 'mongoose';

const pollOptionSchema = new Schema(
  {
    label: { type: String, required: true },
    value: { type: String, required: true },
    votes: { type: Number, default: 0 },
  },
  { _id: false }
);

const pollSchema = new Schema(
  {
    question: { type: String, required: true },
    locale: {
      type: String,
      enum: ['bd', 'global'],
      default: 'bd',
      index: true,
    },
    options: [pollOptionSchema],
    totalVotes: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ['active', 'closed'],
      default: 'active',
      index: true,
    },
    endsAt: { type: Date },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Poll || mongoose.model('Poll', pollSchema);
