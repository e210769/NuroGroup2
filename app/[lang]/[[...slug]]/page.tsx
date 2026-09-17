import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {localPath} from '@/lib/paths';
import NuraSite from '@/components/nura-site';
import site from '@/content/site.json';
import {labels,type Lang} from '@/content/labels';
const langs=['uz','ru','en'];
type Props={params:Promise<{lang:string;slug?:string[]}>};
export async function generateMetadata({params}:Props):Promise<Metadata>{const p=await params;const l=(langs.includes(p.lang)?p.lang:'uz') as Lang;const d=site[l];const section=p.slug?.[0]||'home';const id=p.slug?.[1];const item=section==='news'?d.news.find(x=>x.id===id):section==='projects'?d.projects.find(x=>x.id===id):undefined;const unit=section==='businesses'?d.units.find(x=>x.id===id):undefined;const title=item?.title||unit?.name||labels[l].nav[section as keyof typeof labels.en.nav]||'NURA Group';const description=item?.excerpt||unit?.title||labels[l].aboutText;return {title:section==='home'?`NURA Group — ${labels[l].hero1} ${labels[l].hero2}`:`${title} | NURA Group`,description,alternates:{languages:Object.fromEntries(langs.map(v=>[v,localPath(`/${v}/${(p.slug||[]).join('/')}`)]))},openGraph:{title,description,type:section==='news'&&id?'article':'website',siteName:'NURA Group',locale:l}}}
export default async function Page({params}:Props){const p=await params;if(!langs.includes(p.lang))notFound();const lang=p.lang as Lang;const slug=p.slug||[];const page=slug[0]||'home';const d=site[lang];if(slug.length>2||!['home','businesses','about','projects','news','partners','careers','contacts'].includes(page))notFound();if(slug[1]&&!((page==='businesses'&&d.units.some(u=>u.id===slug[1]))||(page==='projects'&&d.projects.some(v=>v.id===slug[1]))||(page==='news'&&d.news.some(v=>v.id===slug[1]))))notFound();return <NuraSite lang={lang} slug={slug}/>}

export const dynamicParams = false;
export function generateStaticParams() {
  return (['uz','ru','en'] as Lang[]).flatMap(lang => {
    const d = site[lang];
    const routes = [[], ...['businesses','about','projects','news','partners','careers','contacts'].map(p => [p])];
    for (const id of new Set(d.units.map(u => u.id))) routes.push(['businesses', id]);
    for (const p of d.projects) routes.push(['projects', p.id]);
    for (const n of d.news) routes.push(['news', n.id]);
    return routes.map(slug => ({lang, slug}));
  });
}
