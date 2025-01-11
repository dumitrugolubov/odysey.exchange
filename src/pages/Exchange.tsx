import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Exchange() {
  const navigate = useNavigate();

  useEffect(() => {
    window.location.href = 'https://www.odyssey.trade/en_US/register?inviteCode=EAATH';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-xl">Reindirizzamento all'exchange...</p>
    </div>
  );
}