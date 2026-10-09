import mongoose, { Schema } from 'mongoose';

const analyticsSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
      index: true,
    },
    pageViews: { type: Number, default: 0 },
    uniqueReaders: { type: Number, default: 0 },
    conversions: { type: Number, default: 0 },
    newsletterSignups: { type: Number, default: 0 },
    socialShares: { type: Number, default: 0 },
    audienceByRegion: {
      Bangladesh: { type: Number, default: 0 },
      Global: { type: Number, default: 0 },
    },
    categoryBreakdown: {
      tech: { type: Number, default: 0 },
      politics: { type: Number, default: 0 },
      sports: { type: Number, default: 0 },
      business: { type: Number, default: 0 },
      culture: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

analyticsSchema.index({ date: -1 });

export default mongoose.models.Analytics || mongoose.model('Analytics', analyticsSchema);
