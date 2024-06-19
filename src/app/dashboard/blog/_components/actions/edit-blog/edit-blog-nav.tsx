import { updateContent } from '@/actions/blog';
import { Button } from '@/components/ui/button';
import { IBlog } from '@/models/blog';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

type Props = {
  blog: Partial<IBlog>;
  content: string;
};

const EditBlogNav = ({ blog, content }: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleUpdateContent = async () => {
    if (!content) {
      toast.error('Content cannot be empty');
      return;
    }
    setLoading(true);
    const res = await updateContent(blog?._id!, content);
    setLoading(false);

    if (!res.success) {
      toast.error(res.message);
      return;
    }

    toast.success(res.message);
    router.refresh();
    return;
  };
  return (
    <div className='h-16 flex items-center bg-muted px-12'>
      <div className='w-full flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>{blog.title}</h1>
        <div className=''>
          <Button
            variant='link'
            disabled={blog.content === content || loading || content === ''}
            onClick={handleUpdateContent}
          >
            {loading ? 'Saving...' : 'Save Draft'}
          </Button>
          {blog.content === content ? (
            <Link
              href={{
                pathname: '/dashboard/blog',
                query: {
                  action: 'preview',
                  _id: blog._id,
                },
              }}
            >
              <Button variant='link'>Preview</Button>
            </Link>
          ) : (
            <Button variant='link' disabled>
              Preview
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditBlogNav;
