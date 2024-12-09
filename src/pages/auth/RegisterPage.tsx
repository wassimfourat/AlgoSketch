import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AuthLayout } from '../../components/auth/AuthLayout';
import { FormInput } from '../../components/auth/FormInput';
import { PasswordInput } from '../../components/auth/PasswordInput';
import { SubmitButton } from '../../components/auth/SubmitButton';

export const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic
  };

  return (
    <AuthLayout
      title="Create your account"
      subtitle={
        <>
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-emerald-500 hover:text-emerald-400 transition-colors">
            Sign in
          </Link>
        </>
      }
      illustration="/auth/register-illustration.svg"
    >
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
        onSubmit={handleSubmit}
      >
        <FormInput
          id="name"
          name="name"
          type="text"
          label="Full name"
          autoComplete="name"
          required
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <FormInput
          id="email"
          name="email"
          type="email"
          label="Email address"
          autoComplete="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <PasswordInput
          id="password"
          name="password"
          label="Password"
          autoComplete="new-password"
          required
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <PasswordInput
          id="confirm-password"
          name="confirm-password"
          label="Confirm password"
          autoComplete="new-password"
          required
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            required
            className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-emerald-500 focus:ring-emerald-500"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-400">
            I agree to the{' '}
            <Link to="/terms" className="text-emerald-500 hover:text-emerald-400">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-emerald-500 hover:text-emerald-400">
              Privacy Policy
            </Link>
          </label>
        </div>

        <SubmitButton>Create account</SubmitButton>
      </motion.form>
    </AuthLayout>
  );
};