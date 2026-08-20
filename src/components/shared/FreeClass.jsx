"use client";

import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useState } from "react";
import { SiFormbricks } from "react-icons/si";
import parsePhoneNumberFromString from "libphonenumber-js";
import toast from 'react-hot-toast'; // ← ইম্পোর্ট

export function FreeClass() {
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('bd');
  const [formErrors, setFormErrors] = useState({});

  const validatePhoneNumber = (value, countryCode) => {
    if (!value) return false;
    try {
      const phoneNumber = parsePhoneNumberFromString(`+${value}`, countryCode);
      return phoneNumber?.isValid() ?? false;
    } catch {
      return false;
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const customer = Object.fromEntries(formData);
    customer.phone = phone;

    const errors = {};

    if (!customer.name || customer.name.trim().length < 2) {
      errors.name = 'নাম কমপক্ষে ২ অক্ষর হতে হবে';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!customer.email || !emailPattern.test(customer.email)) {
      errors.email = 'সঠিক ইমেইল ঠিকানা দিন';
    }

    if (!phone || !validatePhoneNumber(phone, countryCode)) {
      errors.phone = 'মোবাইল নম্বরটি সঠিক নয়';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      // এরর টোস্ট দেখান
      toast.error('দয়া করে ফর্মটি সঠিকভাবে পূরণ করুন');
      return;
    }

    // সব ঠিক থাকলে
    setFormErrors({});
    console.log('customer:', customer);

    // ========== Formsubmit.co-তে ডেটা পাঠানো ==========
    const form = e.currentTarget;
    const formDataToSend = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/de90d7db4b26b893e352ea29558cdf07', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        toast.success('আপনার অনুরোধ গ্রহণ করা হয়েছে!');
        // ফর্ম রিসেট করুন
        form.reset();
        setPhone('');
        // ১.৫ সেকেন্ড পর পেজ রিফ্রেশ (যদি চান)
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        toast.error('দুঃখিত, কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন।');
      }
    } catch (error) {
      console.error('Form submit error:', error);
      toast.error('নেটওয়ার্ক সমস্যা, আবার চেষ্টা করুন।');
    }
  };


  return (
    <Modal>
      <Button className="bg-accent hover:bg-accent-light text-white font-heading font-semibold px-5 py-2.5 rounded-full shadow-md transition-all duration-200 hover:scale-105">
        ফ্রি ক্লাস নিন
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md bg-background">
            <Modal.CloseTrigger className="bg-card" />

            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <SiFormbricks className="size-5" />
              </Modal.Icon>
              <Modal.Heading>ফ্রি ট্রায়াল ক্লাস বুক করুন</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                আপনার তথ্য দিন, আমরা ২৪ ঘণ্টার মধ্যে যোগাযোগ করব।
              </p>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default" className="bg-transparent">
                <form onSubmit={handleForm} className="flex flex-col gap-4">
                  {/* নাম */}
                  <div>
                    <TextField className="w-full" name="name" type="text" variant="secondary" isRequired>
                      <Label>নাম</Label>
                      <Input
                        placeholder="আপনার নাম"
                        className={formErrors.name ? 'border-red-500' : ''}
                      />
                    </TextField>
                    {formErrors.name && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  {/* ইমেইল */}
                  <div>
                    <TextField className="w-full" name="email" type="email" variant="secondary" isRequired>
                      <Label>ইমেইল</Label>
                      <Input
                        placeholder="আপনার ইমেইল"
                        className={formErrors.email ? 'border-red-500' : ''}
                      />
                    </TextField>
                    {formErrors.email && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                    )}
                  </div>

                  {/* মোবাইল */}
                  <div>
                    <TextField className="w-full" type="tel" variant="secondary" isRequired>
                      <Label>মোবাইল (WhatsApp)</Label>
                      <PhoneInput
                        country={'bd'}
                        value={phone}
                        onChange={(value, country) => {
                          setPhone(value);
                          if (country?.countryCode) {
                            setCountryCode(country.countryCode);
                          }
                          if (formErrors.phone) {
                            setFormErrors((prev) => ({ ...prev, phone: undefined }));
                          }
                        }}
                        placeholder="আপনার মোবাইল নম্বর"
                        inputStyle={{
                          width: '100%',
                          height: '42px',
                          borderRadius: '0.75rem',
                          border: `1px solid ${formErrors.phone ? '#ef4444' : 'var(--border)'}`,
                          fontSize: '0.875rem',
                          backgroundColor: 'var(--background)',
                          color: 'var(--foreground)',
                          transition: 'all 0.2s ease',
                        }}
                        containerStyle={{
                          width: '100%',
                        }}
                        buttonStyle={{
                          borderRadius: '0.75rem 0 0 0.75rem',
                          border: `1px solid ${formErrors.phone ? '#ef4444' : 'var(--border)'}`,
                          backgroundColor: 'var(--background)',
                          transition: 'all 0.2s ease',
                        }}
                        dropdownStyle={{
                          zIndex: 9999,
                          backgroundColor: 'var(--background)',
                          border: '1px solid var(--border)',
                          borderRadius: '0.75rem',
                        }}
                      />
                      {/* PhoneInput-এর পরে এই লাইনটি যোগ করুন */}
                      <input type="hidden" name="phone" value={`+${phone}`} />
                    </TextField>
                    {formErrors.phone && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
                    )}
                  </div>

                  <Modal.Footer>
                    <Button variant="secondary">বাতিল</Button>
                    <Button type="submit">ফ্রি ট্রায়াল বুক করুন</Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}