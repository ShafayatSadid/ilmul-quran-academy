"use client";


import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useState } from "react";
import { SiFormbricks } from "react-icons/si";



export function FreeClass() {
  const [phone, setPhone] = useState('');
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
                <form className="flex flex-col gap-4">

                  <TextField className="w-full" name="name" type="text" variant="secondary">
                    <Label>নাম</Label>
                    <Input placeholder="আপনার নাম" />
                  </TextField>

                  <TextField className="w-full" name="email" type="email" variant="secondary">
                    <Label>ইমেইল</Label>
                    <Input placeholder="আপনার ইমেইল" />
                  </TextField>

                  <TextField className="w-full" name="phone" type="tel" variant="secondary">
                    <Label>মোবাইল (WhatsApp)</Label>
                    <PhoneInput
                      country={'bd'}
                      value={phone}
                      onChange={(phone) => setPhone(phone)}
                      placeholder="আপনার মোবাইল নম্বর"
                     
                      inputStyle={{
                        width: '100%',
                        height: '42px',
                        borderRadius: '0.75rem',
                        border: '1px solid var(--border)',
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
                        border: '1px solid var(--border)',
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
                  </TextField>


                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      বাতিল
                    </Button>
                    <Button type="submit" slot="close">ফ্রি ট্রায়াল বুক করুন</Button>
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