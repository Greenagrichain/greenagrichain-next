"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IconUser } from "@tabler/icons-react";

import { useState } from "react";
import useAuthContext from "@/lib/hooks/useAuthContext";

export default function Component() {
  const [editMode, setEditMode] = useState(false);
  const {
    authData: {
      user: { firstname, lastname, email, number: phone },
    },
    dispatch: authDispatch,
    authData,
  } = useAuthContext();
  const [accountInfo, setAccountInfo] = useState({
    firstname,
    lastname,
    email,
    phone,
  });

  function handleAccountInfoChange(e) {
    setAccountInfo((pad) => ({ ...pad, [e.target.name]: e.target.value }));
  }
  return (
    <div className="px-4 space-y-6 md:px-6">
      <div className="avatar-container space-y-1.5">
        <div className="flex items-center space-x-4">
          {false ? (
            <img
              src="/placeholder.svg"
              alt="Avatar"
              width="96"
              height="96"
              className="border rounded-full"
              style={{ aspectRatio: "96/96", objectFit: "cover" }}
            />
          ) : (
            <div className="avatar border-2 rounded-full p-4">
              <IconUser />
            </div>
          )}
          <div className="space-y-1.5">
            <h1 className="text-2xl font-bold">
              {firstname} {lastname}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">{email}</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-lg font-semibold">Personal Information</h2>
        <div className="flex flex-col gap-6">
          <div className="name-wrapper flex flex-wrap *:grow gap-6">
            <div>
              <Label htmlFor="name">Firstname</Label>
              <Input
                id="firstname"
                name="firstname"
                value={accountInfo.firstname}
                readOnly={!editMode}
                onChange={handleAccountInfoChange}
              />
            </div>
            <div>
              <Label htmlFor="lastname">Lastname</Label>
              <Input
                id="lastname"
                name="lastname"
                value={accountInfo.lastname}
                readOnly={!editMode}
                onChange={handleAccountInfoChange}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              value={accountInfo.email}
              type="email"
              readOnly={!editMode}
              onChange={handleAccountInfoChange}
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              value={accountInfo.phone}
              type="tel"
              readOnly={!editMode}
              onChange={handleAccountInfoChange}
            />
          </div>
        </div>
      </div>

      <div
        className="mt-8"
        onClick={() => {
          if (editMode) {
            authDispatch({
              type: "UPDATE_USER",
              payload: accountInfo,
            });
          }
          setEditMode((pm) => !pm);
        }}
      >
        <Button size="lg">{editMode ? "Save" : "Edit"}</Button>
      </div>
    </div>
  );
}
