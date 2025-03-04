import { toast } from "sonner";

export default function MyComponent() {
    return (
        <button onClick={() => toast.success("Form submitted successfully!")}>
            Show Toast
        </button>
    );
}
