interface EmptyStateProps {
  message: string;
}

export function EmptyState({ message }: EmptyStateProps) {
  return (
    <p className="text-center text-muted text-sm py-20">
      {message}
    </p>
  );
}
