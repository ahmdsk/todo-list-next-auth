"use client";

import Link from "next/link";
import { Editor } from "novel";
import { useState } from "react";
import { FiActivity } from "react-icons/fi";

export default function NotesCreate() {
  const [resultJson, setResultJson] = useState<any | undefined>();

  const saveForm = () => {
    console.log('simpan ke db: ', resultJson);
  }

  return (
    <>
      <h1 className="text-xl font-medium pb-4 flex items-start gap-4">
        <FiActivity /> Hi, what are you thinking about today?
      </h1>
      <Editor
        className="border rounded-lg"
        onUpdate={(editor) => setResultJson(editor?.getJSON())}
        disableLocalStorage={true}
        defaultValue='Start writing here...'
      />

      <div className="flex justify-end pt-4 gap-2">
        <button className="btn btn-sm btn-neutral" onClick={saveForm}>Save</button>
        <Link href="/dashboard" className="btn btn-sm btn-outline">Back</Link>
      </div>
    </>
  );
}
