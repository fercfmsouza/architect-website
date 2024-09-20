import { PaginationItem } from '@/components/ui/pagination';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type PaginationLinkProps = React.ComponentProps<typeof Link> & {
  isActive?: boolean;
};

const PaginationLink: React.FC<PaginationLinkProps> = ({
  href,
  children,
  isActive,
  ...props
}) => {
  return (
    <PaginationItem className="list-none">
      <Link
        href={href}
        {...props}
        className={cn(
          'rounded-[50%] p-3 flex justify-center items-center w-[52px] h-52px]',
          isActive
            ? 'bg-bgBeige text-black'
            : 'bg-white text-black border-[1px] border-gold hover:bg-bgBeige hover:border-none'
        )}
      >
        {children}
      </Link>
    </PaginationItem>
  );
};

export default PaginationLink;
