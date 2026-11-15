// MinifyProject.tsx
export async function minifyProject(zip: Blob): Promise<Blob> {
  const stream = zip.stream().pipeThrough(new CompressionStream("gzip"));
  return new Response(stream).blob();
}

export default function MinifyProject({ project }: { project: Blob }) {
  const run = async () => {
    const small = await minifyProject(project);
    const a = document.createElement("a");
    a.href = URL.createObjectURL(small);
    a.download = "project.zcodeproj.min";
    a.click();
    URL.revokeObjectURL(a.href);
  };
  return <button type="button" onClick={run}>📦 minify</button>;
}