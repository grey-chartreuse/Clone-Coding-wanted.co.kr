'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useModal } from './modal';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    // 비밀번호 제약 조건 확인
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (password && !passwordRegex.test(password)) {
      setPasswordError('비밀번호는 8자 이상이어야 하며, 특수문자 1개 이상, 영문 소문자 1개 이상, 영문 대문자 1개 이상이 포함되어야 합니다.');
    } else {
      setPasswordError('');
    }

    if (email && !emailRegex.test(email)) {
      setEmailError('올바른 이메일 주소 형식이 아닙니다.');
    } else {
      setEmailError('');
    }
  }, [password, email]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 기본 제출 동작 막기
    // 여기서 회원 가입 로직을 구현합니다. 서버에 이메일과 비밀번호를 보낼 수 있습니다.

    if (!passwordError && !emailError) {
      console.log('이메일:', email);
      console.log('비밀번호:', password);
    }
    else {
      console.log("ERROR");
      if (emailError && emailInputRef.current) {
        emailInputRef.current.focus();
        console.log(emailInputRef.current)
        console.log("1");
        return;
      }
      if (passwordError && passwordInputRef.current) {
        passwordInputRef.current.focus();
        console.log(passwordInputRef.current)
        console.log("2");
        return;
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">회원 가입</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">이메일:</label>
            <input
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-3 py-2 border rounded"
              ref={emailInputRef}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">비밀번호:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-3 py-2 border rounded"
              ref={passwordInputRef}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            가입하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;