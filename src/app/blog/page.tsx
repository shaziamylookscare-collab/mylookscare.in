import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { posts } from '@/lib/blog-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export default function BlogPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Our Blog
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Insights, tips, and news from the world of beauty and wellness.
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {posts.map(post => (
            <Card key={post.slug} className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Link href={`/blog/${post.slug}`} className="shrink-0">
                <Image
                  className="h-48 w-full object-cover"
                  src={post.image}
                  alt=""
                  width={600}
                  height={400}
                  data-ai-hint={post.imageHint}
                />
              </Link>
              <div className="flex flex-1 flex-col justify-between bg-card p-6">
                <div className="flex-1">
                  <Link href={`/blog/${post.slug}`} className="mt-2 block">
                    <CardTitle className="text-xl font-semibold font-headline">{post.title}</CardTitle>
                    <CardDescription className="mt-3 text-base text-muted-foreground">{post.excerpt}</CardDescription>
                  </Link>
                </div>
                <CardFooter className="mt-6 flex items-center p-0">
                  <div className="flex-shrink-0">
                      <Avatar>
                        <AvatarImage src={`https://i.pravatar.cc/40?u=${post.author}`} />
                        <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-foreground">{post.author}</p>
                    <div className="flex space-x-1 text-sm text-muted-foreground">
                      <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                    </div>
                  </div>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
