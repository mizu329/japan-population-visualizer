"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // デフォルトのフォーム送信動作を防ぐ

        const apiKey = (e.currentTarget.elements.namedItem('apiKey') as HTMLInputElement).value;

        // ここで必要に応じて入力値の処理やバリデーションを行う
        // 例えば、APIキーをローカルストレージに保存するなど、セッションステレージ
        localStorage.setItem('RESAS_API_KEY', apiKey);

        // ページ遷移
        router.push('/prefecturepopulation');
    };

    return (
        <div>
            <h1>都道府県別総人口推移グラフ</h1>
            <div>
                <h2>RESAS APIキー</h2>
            </div>
            <div>
                <p>API呼び出しに使用するRESAS APIキーを指定します。</p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input 
                            type="password" 
                            name="apiKey" 
                            placeholder="RESAS-APIキー" 
                            required 
                        />
                    </div>
                    <div>
                        <button type="submit">利用開始</button>
                    </div>
                </form>
            </div>
        </div>
    );
}