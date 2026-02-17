import { redirect } from 'next/navigation';

export default function Page() {
    redirect('/research.pdf');
    return null;
}
