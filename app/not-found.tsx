import {localPath} from '@/lib/paths';
import {DEFAULT_LANG,labels} from '@/content/labels';
export default function NotFound(){const text=labels[DEFAULT_LANG];return <main className="wrap missing"><p className="eyebrow">404 · NURA GROUP</p><h1>{text.notFound}</h1><a href={localPath(`/${DEFAULT_LANG}`)} className="btn btn-blue">{text.home} →</a></main>}
