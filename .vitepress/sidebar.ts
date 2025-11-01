export default [
    {
        text: 'User manuals',
        items: [
            {
                text: 'RoBeeX AI Drone',
                collapsed: false,
                base: '/manuals/ai-drone',
                link: '/',
                items: [
                    {
                        text: 'Get started',
                        link: '/',
                    },
                    {
                        text: 'Assembly',
                        link: '/assembly',
                    },
                    {
                        text: 'Activation',
                        link: '/activation',
                    },
                    {
                        text: 'Flight',
                        link: '/flight',
                    },
                ],
            },
            {
                text: 'Expansion boards',
                collapsed: true,
                items: [
                    {
                        text: 'Buzzer & LDR Board',
                        link: '/manuals/expansion-boards/buzzer-ldr-board',
                    },
                ],
            },
        ],
    },
    {
        text: 'Programming',
        base: '/programming',
        items: [
            {
                text: 'Get started',
                link: '/',
            },
            {
                text: 'Blockly',
                base: '/programming/blockly',
                link: '/',
                collapsed: true,
                items: [
                    {
                        text: 'Guides',
                        items: [
                            {
                                text: 'Writing your first Blockly program',
                                link: '/guides/first-program',
                            },
                        ],
                    },
                ],
            },
            {
                text: 'Python',
                base: '/programming/python',
                link: '/',
                collapsed: true,
                items: [
                    {
                        text: 'Guides',
                        items: [
                            {
                                text: 'Writing your first Python program',
                                link: '/guides/first-program',
                            },
                        ],
                    },
                ],
            },
            {
                text: 'Arduino',
                base: '/programming/arduino',
                link: '/',
                collapsed: true,
                items: [
                    {
                        text: 'Guides',
                        items: [
                            {
                                text: 'Writing your first Arduino program',
                                link: '/guides/first-program',
                            },
                        ],
                    },
                ],
            },
        ],
    },
];
