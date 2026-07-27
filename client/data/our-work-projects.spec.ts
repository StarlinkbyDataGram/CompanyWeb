import { describe, expect, it } from 'vitest';
import { ourWorkProjects } from './our-work-projects';

describe('ourWorkProjects', () => {
  it('contains the expected nine featured deployments', () => {
    expect(ourWorkProjects).toHaveLength(9);
    expect(ourWorkProjects.map((project) => project.id)).toEqual([
      'hp-kit--naval-vessel--sagbama',
      'hp-kit--houseboat--warri',
      'hp-kit--enterprise--degema',
      'hp-kit--enterprise--enval',
      'standard--government-office--rivers',
      'hp-kit--enterprise-houseboat--mixed',
      'mini--outdoor-business',
      'standard--residential--arochukwu',
      'standard--residential--duplex-4bed',
    ]);
  });

  it('uses image files only when the matching folder has actual images', () => {
    const projectWithoutImages = ourWorkProjects.find((project) => project.folder === 'mini--outdoor-business');
    expect(projectWithoutImages?.imageFiles).toEqual([]);

    const projectWithImages = ourWorkProjects.find((project) => project.folder === 'hp-kit--houseboat--warri');
    expect(projectWithImages?.imageFiles).toEqual(['photo-1.jpeg', 'photo-2.jpeg', 'photo-3.jpeg']);
  });
});
