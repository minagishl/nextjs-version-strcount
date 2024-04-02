'use client';

import { APP_NAME } from './config';
import { useState } from 'react';

export default function Home() {
  const [textWithSpace, setTextWithSpace] = useState<number>(0);
  const [textWithoutSpace, setTextWithoutSpace] = useState<number>(0);
  const [lines, setLines] = useState<number>(0);
  const [paragraphs, setParagraphs] = useState<number>(0);
  const [manuscript, setManuscript] = useState<number>(0);

  function handleInput() {
    const text = document.querySelector('textarea')?.value;
    const textWithSpace = text?.length;
    const textWithoutSpace = text?.replace(/\s+/g, '').length;
    const lines = text?.split('\n').length;
    const paragraphs = text?.split('\n\n').length;
    if (typeof textWithoutSpace !== 'number') return;
    const manuscript = Math.ceil(textWithoutSpace / 400);

    setTextWithSpace(textWithSpace || 0);
    setTextWithoutSpace(textWithoutSpace);
    setLines(lines || 0);
    setParagraphs(paragraphs || 0);
    setManuscript(manuscript);
  }

  return (
    <main className="flex h-[100dvh] w-[100dvw] items-center justify-center font-sans">
      <div className="flex h-[100dvh] w-full max-w-screen-sm flex-col space-y-5 p-10">
        <h1 className="text-3xl font-bold">{APP_NAME}</h1>
        <div>
          <div className="flex flex-row">
            <p>文字数（スペース込み）</p>
            <p>{textWithSpace}</p>
          </div>
          <div className="flex flex-row">
            <p>文字数（スペースなし）</p>
            <p>{textWithoutSpace}</p>
          </div>
          <div className="flex flex-row space-x-3">
            <p>行数</p>
            <p>{lines}</p>
          </div>
          <div className="flex flex-row space-x-3">
            <p>段落数</p>
            <p>{paragraphs}</p>
          </div>
          <div className="flex flex-row">
            <p>原稿用紙換算（400文字換算）</p>
            <p>{manuscript}</p>
          </div>
        </div>
        <textarea
          className="h-full w-full flex-1 resize-none rounded-none border-2 border-black p-2 outline-none"
          placeholder="ここにテキストを入力してください"
          onChange={handleInput}
        ></textarea>
      </div>
    </main>
  );
}
