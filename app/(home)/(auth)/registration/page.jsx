'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { showAlert } from '@/utils/sweetAlert';

const roleOptions = [
  { value: 'reader', label: 'Reader', helper: 'Save stories, follow topics, and read the briefing' },
  { value: 'editor', label: 'Editor', helper: 'Manage publishing workflow and newsroom content' },
  { value: 'admin', label: 'Admin', helper: 'Oversee analytics, teams, and platform settings' },
];

const RegistrationPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState('reader');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');

  const passwordStrength = useMemo(() => {
    if (!password) {
      return { label: 'No password yet', width: '0%', color: 'bg-slate-500', text: 'text-slate-300' };
    }

    const checks = [
      password.length >= 8,
      /[A-Z]/.test(password),
      /[a-z]/.test(password),
      /\d/.test(password),
      /[^A-Za-z0-9]/.test(password),
    ].filter(Boolean).length;

    if (checks <= 2) {
      return { label: 'Weak', width: '35%', color: 'bg-red-500', text: 'text-red-300' };
    }
    if (checks === 3 || checks === 4) {
      return { label: 'Good', width: '70%', color: 'bg-amber-400', text: 'text-amber-300' };
    }
    return { label: 'Strong', width: '100%', color: 'bg-emerald-500', text: 'text-emerald-300' };
  }, [password]);

  const onSubmit = async (formData) => {
    if (formData.password !== confirmPassword) {
      showAlert({
        title: 'Password mismatch',
        text: 'Please confirm your password carefully before continuing.',
        icon: 'error',
      });
      return;
    }

    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, role: selectedRole }),
    });

    const data = await response.json();

    if (!response.ok) {
      showAlert({
        title: 'Error!',
        text: data.message || 'Registration failed',
        icon: 'error',
      });
      return;
    }

    showAlert({ title: 'Success!', text: 'Registration successful' });
    reset();
    setPassword('');
    setConfirmPassword('');
    setSelectedRole('reader');
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.18),_transparent_28%),linear-gradient(135deg,#020617_0%,#0f172a_40%,#111827_100%)] px-4 py-10 text-slate-100">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-slate-950/40 backdrop-blur-xl md:grid-cols-2">
        <div className="relative hidden overflow-hidden bg-slate-950/80 md:block">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),_transparent_28%)]" />
          <div className="relative flex h-full flex-col justify-between p-10">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-300 text-lg font-black text-white shadow-lg shadow-orange-500/40">
                N
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-orange-200">NewsEra</div>
                <div className="text-sm text-slate-300">Build your newsroom</div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-200">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                Create your profile
              </div>
              <h1 className="mt-5 max-w-md text-4xl font-black leading-tight text-white">
                Join the next generation of digital journalism.
              </h1>
              <p className="mt-4 max-w-md text-base leading-7 text-slate-300">
                Create an editorial account to publish, manage, and grow stories that matter across Bangladesh and the world.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-black text-sky-300">24/7</div>
                <div className="mt-1 text-xs text-slate-300">Publishing desk</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-black text-sky-300">AI</div>
                <div className="mt-1 text-xs text-slate-300">Assisted workflow</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-md">
            <div className="mb-8 text-center md:text-left">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-orange-300">Launch account</p>
              <h2 className="mt-3 text-3xl font-black text-white">Create your profile</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Full name</label>
                <input
                  {...register('name', { required: true })}
                  type="text"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Email</label>
                <input
                  {...register('email', { required: true })}
                  type="email"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Choose your role</label>
                <div className="grid gap-2 sm:grid-cols-3">
                  {roleOptions.map((role) => (
                    <button
                      key={role.value}
                      type="button"
                      onClick={() => setSelectedRole(role.value)}
                      className={`rounded-2xl border p-3 text-left transition ${
                        selectedRole === role.value
                          ? 'border-orange-400/50 bg-orange-500/10 text-white'
                          : 'border-white/10 bg-slate-900/70 text-slate-300 hover:border-orange-400/30'
                      }`}
                    >
                      <div className="text-sm font-semibold">{role.label}</div>
                      <div className="mt-1 text-[10px] leading-4 text-slate-400">{role.helper}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Password</label>
                <div className="relative">
                  <input
                    {...register('password', {
                      required: true,
                      onChange: (event) => setPassword(event.target.value),
                    })}
                    type={showPassword ? 'text' : 'password'}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 pr-11 text-sm text-white outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20"
                    placeholder="Create a secure password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-3 flex items-center text-slate-400 transition hover:text-slate-200"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <IoIosEye className="text-2xl" /> : <IoIosEyeOff className="text-2xl" />}
                  </button>
                </div>
                <div className="mt-3">
                  <div className="mb-2 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    <span>Strength</span>
                    <span className={passwordStrength.text}>{passwordStrength.label}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                    <div className={`${passwordStrength.color} h-full rounded-full transition-all duration-300`} style={{ width: passwordStrength.width }} />
                  </div>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Confirm password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20"
                  placeholder="Re-enter your password"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-amber-400 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition hover:opacity-95"
              >
                Create account
              </button>
            </form>

            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs uppercase tracking-[0.2em] text-slate-400">or sign up with</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="mb-5 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.18em] text-slate-400">
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-emerald-300">Secure session</span>
              <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-2.5 py-1 text-sky-300">Email verified</span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[{ icon: FaGoogle, color: 'text-red-400' }, { icon: FaFacebookF, color: 'text-blue-400' }, { icon: FaTwitter, color: 'text-sky-400' }].map(({ icon: Icon, color }) => (
                <button
                  key={color}
                  type="button"
                  className="flex h-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/80 text-xl transition hover:border-orange-400/40 hover:bg-slate-800"
                >
                  <Icon className={color} />
                </button>
              ))}
            </div>

            <p className="mt-7 text-center text-sm text-slate-300">
              Already have an account?{' '}
              <Link href="/login" className="font-semibold text-orange-300 transition hover:text-orange-200">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegistrationPage;