"use client";

import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import { ArrowRight, Upload, User, Mail, Phone, FileText, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedSection } from "@/components/animated-section";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useParams } from "next/navigation";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  resume: File | null;
  coverLetter: string;
  portfolioUrl: string;
  additionalInfo: string;
}

interface FormErrors {
  [key: string]: string | undefined;
  firstName?: string;
  lastName?: string;
  email?: string;
  resume?: string;
}

export default function ApplyPage() {
  // dynamic jobId 
  const {jobId} = useParams()
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
    portfolioUrl: "",
    additionalInfo: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  // Add keyframes for animations
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (e.target instanceof HTMLInputElement && e.target.type === 'file') {
      const files = e.target.files;
      setFormData((prev) => ({
        ...prev,
        [name]: files?.[0] || null,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.resume) newErrors.resume = "Resume is required";
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    const name = `${formData.firstName} ${formData.lastName}`

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("jobId", jobId as string);
      formDataToSend.append("name", name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("coverLetter", formData.coverLetter);
      formDataToSend.append("portfolioUrl", formData.portfolioUrl);
      formDataToSend.append("additionalInfo", formData.additionalInfo);

      if (formData.resume) {
        formDataToSend.append("file", formData.resume);
      }

      const res = await axios.post(
        `${apiUrl}/api/job-applications`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.status === 201) {
        console.log("Application submitted successfully");
        // Keep submitted = true to show success message
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          resume: null,
          coverLetter: "",
          portfolioUrl: "",
          additionalInfo: "",
        });
      }
    } catch (err: any) {
      console.log(err);
      if (err.response?.status === 400) {
        setErrors({ form: err.response.data.message });
      } else {
        setErrors({ form: "Failed to submit application. Please try again." });
      }
      setSubmitted(false);
    }

    setErrors({});
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];
    
    if (file && allowedTypes.includes(file.type)) {
      setFormData((prev) => ({ ...prev, resume: file }));
      if (errors.resume) setErrors((prev) => ({ ...prev, resume: undefined }));
    } else {
      setErrors((prev) => ({ 
        ...prev, 
        resume: "Please upload a PDF, DOC, or DOCX file" 
      }));
    }
  };


  return (
    <div className="min-h-screen relative overflow-hidden  ">
      {/* <div className="absolute inset-0 bg-[url('/apply2.png')] bg-cover bg-center"></div> */}
      <section className="relative pb-20 pt-30 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            fill
            alt="referenceImage"
            className="object-cover"
            src="/apply-banner2.jpg"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Apply to Join
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Our Team
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 dark:text-gray-300 mb-12 max-w-4xl mx-auto">
            We’re thrilled you’re interested in joining us! Fill out the form
            below to share your details and start your journey.
          </p>
        </div>
      </section>
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div> */}
      <div className="relative max-w-4xl mx-auto py-20">
        <AnimatedSection animation="fadeInUp" delay={200}>
          <div className="glass-card p-8 rounded-3xl shadow-lg border border-white/20 bg-white/20 backdrop-blur-md">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Application Submitted!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for applying. Our team will review your submission
                  and reach out soon.
                </p>
                <Link href="/careers">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold">
                    Back to Careers <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative">
                {/* Loading Overlay */}
                {isSubmitting && (
                  <div className="absolute inset-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm z-10 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                      <p className="text-gray-600 dark:text-gray-300 font-medium">
                        Submitting your application...
                      </p>
                    </div>
                  </div>
                )}

                {/* Form Error Alert */}
                {submitError && (
                  <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg animate-fade-in">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-red-100 dark:bg-red-800/50 rounded-full">
                        <svg
                          className="w-5 h-5 text-red-600 dark:text-red-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <p className="text-red-600 dark:text-red-400">
                        {submitError}
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 w-5 h-5" />
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`pl-10 glass-card border-white/20 bg-transparent ${
                          errors.firstName ? "border-red-500" : ""
                        }`}
                        placeholder="Enter your first name"
                        aria-required="true"
                      />
                    </div>
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1 animate-pulse">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 w-5 h-5" />
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`pl-10 glass-card border-white/20 bg-transparent ${
                          errors.lastName ? "border-red-500" : ""
                        }`}
                        placeholder="Enter your last name"
                        aria-required="true"
                      />
                    </div>
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1 animate-pulse">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 w-5 h-5" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`pl-10 glass-card border-white/20 bg-transparent ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      placeholder="Enter your email"
                      aria-required="true"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 animate-pulse">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 w-5 h-5" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="pl-10 glass-card border-white/20 bg-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="resume"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Resume/CV <span className="text-red-500">*</span>
                  </label>
                  <div
                    className={`relative border-2 border-dashed rounded-lg p-6 text-center ${
                      errors.resume ? "border-red-500" : "border-gray-300"
                    } hover:border-indigo-500 transition-colors`}
                    onDrop={handleFileDrop}
                    onDragOver={(e) => e.preventDefault()}
                  >
                    <Upload className="mx-auto w-8 h-8 text-gray-800 mb-2" />
                    <p className="text-sm text-gray-600 mb-2">
                      {formData.resume
                        ? formData.resume.name
                        : "Drag and drop your resume or click to upload"}
                    </p>
                    <Input
                      id="resume"
                      name="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleInputChange}
                      className="hidden"
                      ref={fileInputRef}
                      aria-required="true"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      className="glass-card border-white/20 bg-transparent text-gray-900 hover:bg-indigo-100"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      Upload File
                    </Button>
                  </div>
                  {errors.resume && (
                    <p className="text-red-500 text-sm mt-1 animate-pulse">
                      {errors.resume}
                    </p>
                  )}
                  <p className="text-sm text-gray-800 mt-1">
                    Accepted formats: PDF, DOC, DOCX (max 5MB)
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="coverLetter"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Cover Letter (Optional)
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 text-gray-800 w-5 h-5" />
                    <Textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      className="pl-10 glass-card border-white/20 bg-transparent"
                      placeholder="Tell us why you’re a great fit"
                      rows={5}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="portfolioUrl"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Portfolio/LinkedIn (Optional)
                  </label>
                  <div className="relative">
                    <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 w-5 h-5" />
                    <Input
                      id="portfolioUrl"
                      name="portfolioUrl"
                      type="url"
                      value={formData.portfolioUrl}
                      onChange={handleInputChange}
                      className="pl-10 glass-card border-white/20 bg-transparent"
                      placeholder="Enter your portfolio or LinkedIn URL"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="additionalInfo"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Additional Information
                  </label>
                  <Textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    className="glass-card border-white/20 bg-transparent"
                    placeholder="Anything else you’d like us to know?"
                    rows={4}
                  />
                </div>

                {submitError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm">{submitError}</p>
                  </div>
                )}

                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-600 text-sm">
                      Your application has been submitted successfully! We'll be
                      in touch soon.
                    </p>
                  </div>
                )}

                <div className="flex justify-end gap-4">
                  <Link href="/careers">
                    <Button
                      type="button"
                      variant="outline"
                      className="glass-card border-white/20 bg-transparent text-gray-900 hover:bg-indigo-100 rounded-full"
                      disabled={isSubmitting}
                    >
                      Cancel
                    </Button>
                  </Link>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full relative min-w-[180px]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="opacity-0">Submit Application</span>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                        </div>
                      </>
                    ) : (
                      <>
                        Submit Application{" "}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}