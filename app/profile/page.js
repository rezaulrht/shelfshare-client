"use client";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { FaUser, FaEnvelope, FaCamera, FaSave, FaTimes } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

export default function ProfilePage() {
  const { user, updateUserProfile } = useAuth();
  const router = useRouter();
  
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!user) {
      router.push("/login");
      return;
    }
    
    setName(user.displayName || "");
    setPhotoURL(user.photoURL || "");
  }, [user, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast.error("Name is required");
      return;
    }

    setLoading(true);

    try {
      await updateUserProfile({
        displayName: name,
        photoURL: photoURL || null,
      });
      
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error(error.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  if (!user || !mounted) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const avatarVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200 py-12 px-4">
      <Toaster position="top-right" />
      
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-heading font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-3">
            My Profile
          </h1>
          <p className="text-lg text-neutral/70">Manage your account information</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Avatar Section */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1"
          >
            <div className="bg-base-100 rounded-2xl shadow-xl p-6 border border-base-300 h-full">
              <div className="flex flex-col items-center">
                <motion.div
                  variants={avatarVariants}
                  className="relative mb-6"
                >
                  {user.photoURL ? (
                    <motion.img
                      src={user.photoURL}
                      alt={user.displayName}
                      className="w-40 h-40 rounded-full object-cover border-4 border-primary shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  ) : (
                    <motion.div
                      className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-primary/70 text-white flex items-center justify-center text-6xl font-bold border-4 border-primary shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {user.displayName?.charAt(0) || user.email?.charAt(0) || "U"}
                    </motion.div>
                  )}
                  <motion.div
                    className="absolute bottom-2 right-2 bg-primary text-white p-3 rounded-full shadow-lg cursor-pointer"
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaCamera className="text-lg" />
                  </motion.div>
                </motion.div>

                <h2 className="text-2xl font-heading font-bold text-neutral mb-1">
                  {user.displayName || "User"}
                </h2>
                <p className="text-neutral/60 text-sm mb-4">{user.email}</p>
                
                <div className="w-full pt-4 border-t border-base-300">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="badge badge-primary badge-sm">Member</div>
                      <span className="text-neutral/70">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Edit Form */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2"
          >
            <div className="bg-base-100 rounded-2xl shadow-xl p-8 border border-base-300">
              <h3 className="text-2xl font-heading font-bold text-neutral mb-6">
                Edit Profile
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <motion.div
                  className="form-control"
                  variants={itemVariants}
                >
                  <label className="label">
                    <span className="label-text font-semibold text-neutral">Full Name</span>
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60" />
                    <motion.input
                      type="text"
                      placeholder="Your name"
                      className="input input-bordered w-full pl-12 focus:input-primary transition-all"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={loading}
                      whileFocus={{ scale: 1.01 }}
                    />
                  </div>
                </motion.div>

                {/* Email Field (Read-only) */}
                <motion.div
                  className="form-control"
                  variants={itemVariants}
                >
                  <label className="label">
                    <span className="label-text font-semibold text-neutral">Email Address</span>
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral/40" />
                    <input
                      type="email"
                      className="input input-bordered w-full pl-12 bg-base-200 cursor-not-allowed"
                      value={user.email}
                      disabled
                    />
                  </div>
                  <label className="label">
                    <span className="label-text-alt text-neutral/60 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      Email cannot be changed
                    </span>
                  </label>
                </motion.div>

                {/* Photo URL Field */}
                <motion.div
                  className="form-control"
                  variants={itemVariants}
                >
                  <label className="label">
                    <span className="label-text font-semibold text-neutral">Profile Photo URL</span>
                  </label>
                  <div className="relative">
                    <FaCamera className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60" />
                    <motion.input
                      type="url"
                      placeholder="https://example.com/photo.jpg"
                      className="input input-bordered w-full pl-12 focus:input-primary transition-all"
                      value={photoURL}
                      onChange={(e) => setPhotoURL(e.target.value)}
                      disabled={loading}
                      whileFocus={{ scale: 1.01 }}
                    />
                  </div>
                  <label className="label">
                    <span className="label-text-alt text-neutral/60">
                      Enter a URL to your profile photo
                    </span>
                  </label>
                </motion.div>

                {/* Buttons */}
                <motion.div
                  className="flex gap-4 pt-6"
                  variants={itemVariants}
                >
                  <motion.button
                    type="submit"
                    className="btn btn-primary text-white flex-1 gap-2"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaSave />
                    {loading ? "Updating..." : "Update Profile"}
                  </motion.button>
                  <motion.button
                    type="button"
                    className="btn btn-outline gap-2"
                    onClick={() => router.push("/")}
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaTimes />
                    Cancel
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
