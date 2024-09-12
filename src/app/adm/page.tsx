"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { db, storage } from "@/firebaseConfig";

import { ref, set } from "firebase/database";
import { getDownloadURL, uploadBytes } from "firebase/storage";
import Image from "next/image";
import {
  FormEvent,
  useRef,
  useState,
} from "react";

// Importe ref do storage
import { ref as storageRef } from "firebase/storage";

export default function Adm() {
  const [name, setName] = useState<string>("");
  const [link, setLink] = useState<string>("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | undefined>(undefined);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const url = URL.createObjectURL(selectedFile);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name || !file || !link) {
      alert("Por favor, preencha todos os campos e selecione uma imagem.");
      return;
    }

    try {
      const fileName = `${Date.now()}-${file.name}`;

      const imageRef = storageRef(storage, `images/${fileName}`);

      const snapshot = await uploadBytes(imageRef, file);

      const downloadURL = await getDownloadURL(snapshot.ref);

      await set(ref(db, "projects/" + name), {
        name,
        link,
        imgUrl: downloadURL
      });

      setName("");
      setLink("");
      setFile(undefined);
      setPreviewUrl(null);

      alert("Projeto adicionado com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar projeto:", error);
      alert("Ocorreu um erro ao adicionar o projeto. Por favor, tente novamente.");
    }
  };

  return (
    <main className="bg-gray-blue h-full gap-4 flex flex-col p-8">
      <h2 className="text-center text-6xl font-bold text-white">
        Adicionar Projeto
      </h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          placeholder="Nome do projeto"
          value={name}
          setValueFn={setName}
        />
        <Input
          placeholder="Link do projeto"
          value={link}
          setValueFn={setLink}
        />

        <Button
          text="Adicionar Imagem"
          className="bg-green-600"
          onClick={(e) => {
            e.preventDefault();
            fileInputRef.current?.click();
          }}
        />

        <input
          className="hidden"
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          accept="image/*"
        />

        {previewUrl && (
          <div className="mt-4">
            <Image
              src={previewUrl}
              width={500}
              height={300}
              alt="Preview"
              className="max-w-full h-auto"
            />
          </div>
        )}

        <Button text="Cadastrar" />
      </form>
    </main>
  );
}
