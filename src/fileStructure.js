// fileStructure.js

// Todo: make this more adaptable to new files that may be added (i.e. not hardcoding the file paths)
export const fileSystem = {
    root: {
        'about.md': 'filesystem/root/about.md',
        'contact.md': 'filesystem/root/contact.md',
        cv: {
            'about-me.md': 'filesystem/root/cv/about-me.md',
            'education.md': 'filesystem/root/cv/education.md',
            'experience.md': 'filesystem/root/cv/experience.md',
            'skills.md': 'filesystem/root/cv/skills.md'
        },
        projects: {
            'terminal-website.md': 'filesystem/root/projects/terminal-website.md',
            'twiga.md': 'filesystem/root/projects/twiga.md',
            'utter.md': 'filesystem/root/projects/utter.md'
        }
    }
}
