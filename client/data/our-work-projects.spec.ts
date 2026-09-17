import { describe, expect, it } from 'vitest';
import { ourWorkProjects } from './our-work-projects';

describe('ourWorkProjects', () => {
  it('contains the expected featured deployments including home and estate', () => {
    expect(ourWorkProjects).toHaveLength(11);
    expect(ourWorkProjects.map((project) => project.id)).toEqual([
      'hp-kit--naval-vessel--sagbama',
      'hp-kit--houseboat--warri',
      'hp-kit--enterprise--degema',
      'hp-kit--enterprise--enval',
      'standard--government-office--rivers',
      'hp-kit--enterprise-houseboat--mixed',
      'mini--outdoor-business',
      'standard--residential--arochukwu',
      'starlink--high-performance-houseboat',
      'standard--home--lekki-lagos',
      'estate--multi-unit--abuja-fct',
    ]);
  });

  it('maps home and estate folders to their installation images', () => {
    const home = ourWorkProjects.find((project) => project.id === 'standard--home--lekki-lagos');
    expect(home?.folder).toBe('HOME-INSTALLATION');
    expect(home?.category).toBe('home');
    expect(home?.photoCount).toBe(8);
    expect(home?.imageFiles).toHaveLength(8);

    const estate = ourWorkProjects.find((project) => project.id === 'estate--multi-unit--abuja-fct');
    expect(estate?.folder).toBe('ESTATE-INSTALLATION');
    expect(estate?.category).toBe('estate');
    expect(estate?.photoCount).toBe(5);
    expect(estate?.imageFiles).toHaveLength(5);
  });

  it('uses image files only when the matching folder has actual images', () => {
    const projectWithImages = ourWorkProjects.find((project) => project.folder === 'hp-kit--houseboat--warri');
    expect(projectWithImages?.imageFiles).toEqual(['photo-1.jpeg', 'photo-2.jpeg', 'photo-3.jpeg']);
  });
});
