import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ['super_admin', 'editor', 'journalist', 'reader', 'subscriber'],
      default: 'reader',
      index: true,
    },
    avatar: String,
    bio: String,
    provider: {
      type: String,
      enum: ['local', 'google', 'github'],
      default: 'local',
    },
    isEmailVerified: { type: Boolean, default: false },
    activeSessions: [{ type: String }],
    readingHistory: [{ type: Schema.Types.ObjectId, ref: 'Article' }],
    savedArticles: [{ type: Schema.Types.ObjectId, ref: 'Article' }],
    newsletterPreferences: {
      tech: { type: Boolean, default: true },
      business: { type: Boolean, default: true },
      sports: { type: Boolean, default: false },
      culture: { type: Boolean, default: true },
    },
  },
  { timestamps: true }
);

UserSchema.index({ role: 1, email: 1 });

export default mongoose.models.User || mongoose.model('User', UserSchema);
