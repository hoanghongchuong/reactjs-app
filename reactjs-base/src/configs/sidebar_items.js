
export const siteBarItem = [
    {
        path: '/admin',
        sidebarProps: {
            displayText: 'Dashboard',
            icon: 'bx bxs-dashboard',
        }
    },
    {
        path: '/admin/analytics',
        state: 'admin.analytics',
        sidebarProps: {
            displayText: 'Analytics',
            icon: 'bx bxs-report',
        }
    },
    {
        path: '/admin/customer',
        sidebarProps: {
            displayText: 'Customerg',
            icon: 'bx bxs-user-plus',
        }
    },
    {
        path: '/admin/form',
        state: 'admin.form',
        sidebarProps: {
            displayText: 'Form',
            icon: 'bx bx-table'
        },
        child: [
            {
                path: 'form',
                sidebarProps: {
                    displayText: 'Simple Table',
                },
            },
            {
                path: 'form/button',
                state: 'admin.form.button',
                sidebarProps: {
                    displayText: 'Button',
                },
            },
        ],
    },
    {
        path: '/admin/table',
        state: 'admin.table',
        sidebarProps: {
            displayText: 'Table',
            icon: 'bx bxs-dashboard',
        }
    },
];