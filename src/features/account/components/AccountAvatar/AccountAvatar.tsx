import "./AccountAvatar.css";

type AccountAvatarProps = {
  hash: string;
  size?: number;
};

// TODO: lazy load here
export function AccountAvatar({ hash, size = 50 }: AccountAvatarProps) {
  const src = `https:secure.gravatar.com/avatar/${hash}.jpg?s=${size}`;

  return <img className="account-avatar" src={src} alt="account_avatar" />;
}
