import { ArrowBigUpDash } from 'lucide-react';

export default function MoveTop() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // For a smooth scrolling effect
        });
    };

    return (
        <div className="move-top-container" onClick={scrollToTop}>
            <ArrowBigUpDash />
        </div>
    );
}