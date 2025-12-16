import React from 'react';
import Layout from '@theme/Layout';
import ProfileForm from '../components/ProfileForm';
import { UserProvider } from '../contexts/UserContext';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function Signup() {
  return (
    <Layout title="Signup" description="Create your profile">
      <div className="container margin-vert--lg">
        <h1 className="text-center">Join the Classroom</h1>
        <p className="text-center">Personalize your learning experience.</p>
        
        <BrowserOnly>
          {() => (
            <UserProvider>
               <ProfileForm />
            </UserProvider>
          )}
        </BrowserOnly>
      </div>
    </Layout>
  );
}
