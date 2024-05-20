'use client'

import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';
import HomeBody from '@/app/homeBody';
import "./globals.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between" style={{marginTop: '50px'}}>
      <HomeBody />
    </main>
  );
}
