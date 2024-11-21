"use client";

import { useRef, useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

export const FromUser = () => {
  const [isOpen, setIsOpen] = useState(true); // حالة للتحكم في فتح المودال
  const fd = useRef();

  function handleFormData(e) {
    e.preventDefault();
    const formData = new FormData(fd.current);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    // إغلاق المودال بعد الحفظ
    setIsOpen(false);
  }

  return (
    <>
      {isOpen && (
        <Modal title={`Add Users`}>
          <div>
            <form method="post" onSubmit={handleFormData} ref={fd}>
              <Label>Username</Label>
              <Input
                type="text"
                name="username"
                className="mb-2"
                placeholder="Username"
              />
              <Label>Email</Label>
              <Input
                type="text"
                name="email"
                className="mb-2"
                placeholder="Email"
              />
              <div className="flex gap-3">
                <Button type="submit">Save</Button>
                <Button variant="secondary" onClick={() => setIsOpen(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
};
