"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { db, storage } from "@/firebaseConfig";

import { ref, set } from "firebase/database";
import { getDownloadURL, uploadBytes } from "firebase/storage";
import Image from "next/image";
import { FormEvent, useRef, useState } from "react";

import { ref as storageRef } from "firebase/storage";
import { BeatLoader } from "react-spinners";
import Link from "next/link";

export default function Adm() {
  const [name, setName] = useState<string>("");
  const [link, setLink] = useState<string>("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | undefined>(undefined);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    
    if (!name || !file || !link) {
      alert("Por favor, preencha todos os campos e selecione uma imagem.");
      setLoading(false)
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
        imgUrl: downloadURL,
      });

      setName("");
      setLink("");
      setFile(undefined);
      setPreviewUrl(null);

      setLoading(false)

      alert("Projeto adicionado com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar projeto:", error);
      setLoading(false)
      alert(
        "Ocorreu um erro ao adicionar o projeto. Por favor, tente novamente."
      );
    }
  };

  return (
    <main className="bg-gray-blue gap-4 h-full flex flex-col p-8">

      <Link href="/" className="text-white">Voltar para Landing page</Link>

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

        {loading && <Button disabled icon={<BeatLoader size={20} color="white" />} />}
        {!loading && <Button text="Cadastrar" />}
        
      </form>


    </main>
  );
}
