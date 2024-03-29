vi.mock('@gilbarbara/helpers', async importOriginal => {
  const helpers = await importOriginal<typeof import('@gilbarbara/helpers')>();

  return {
    ...helpers,
    now: () => 1234567890,
    uuid: () => '8cdee72f-28d4-4441-91f0-c61f6e3d9684',
  };
});
