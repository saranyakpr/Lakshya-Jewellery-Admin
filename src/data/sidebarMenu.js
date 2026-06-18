export const sidebarSections = [
  {
    id: 'primary',
    title: '',
    items: [
      {
        label: 'Dashboard',
        icon: 'dashboard',
        path: '/dashboard',
        description: "Welcome back, Amit! Here's what's happening today.",
      },
      {
        label: 'Products',
        icon: 'products',
        path: '/products',
        expanded: false,
        description: 'Manage your product catalog, collections, and item details.',
        children: [
          {
            label: 'All Products',
            path: '/products/all-products',
            description: 'Browse, search, and update every product in your catalog.',
          },
        ],
      },
      {
        label: 'Inventory',
        icon: 'inventory',
        badge: '3',
        path: '/inventory',
        description: 'Track stock levels, item availability, and replenishment needs.',
      },
      {
        label: 'Orders',
        icon: 'orders',
        badge: '12',
        path: '/orders',
        expanded: false,
        description: 'Monitor order flow, fulfillment status, and customer purchases.',
        children: [
          {
            label: 'All Orders',
            path: '/orders/all-orders',
            description: 'Review every order placed across your sales channels.',
          },
          {
            label: 'Returns & Refunds',
            path: '/orders/returns-refunds',
            description: 'Process returns, refunds, and post-purchase issue handling.',
          },
          {
            label: 'Shipping & Tracking',
            path: '/orders/shipping-tracking',
            description: 'Track shipments, courier updates, and delivery progress.',
          },
        ],
      },
      {
        label: 'Customers',
        icon: 'customers',
        path: '/customers',
        description: 'Manage customer accounts, history, and engagement from one place.',
      },
      {
        label: 'Jewelry Business',
        icon: 'business',
        path: '/jewelry-business',
        expanded: false,
        description: 'Handle pricing inputs and custom workflows specific to jewelry sales.',
        children: [
          {
            label: 'Gold Rate',
            path: '/jewelry-business/gold-rate',
            description: 'Update and review current gold rates used across the platform.',
          },
          {
            label: 'Diamond Pricing',
            path: '/jewelry-business/diamond-pricing',
            description: 'Maintain diamond pricing slabs, quality tiers, and markups.',
          },
          {
            label: 'Making Charges',
            path: '/jewelry-business/making-charges',
            description: 'Configure making charges for products, categories, and variants.',
          },
          {
            label: 'Custom Orders',
            path: '/jewelry-business/custom-orders',
            description: 'Track bespoke order requests, approvals, and production status.',
          },
        ],
      },
      {
        label: 'Sales & Finance',
        icon: 'finance',
        path: '/sales-finance',
        expanded: false,
        description: 'Oversee billing, payments, tax handling, and revenue performance.',
        children: [
          {
            label: 'Invoice',
            path: '/sales-finance/invoice',
            description: 'Generate and manage invoices for every completed transaction.',
          },
          {
            label: 'Payments',
            path: '/sales-finance/payments',
            description: 'Monitor payment status, gateways, and settlement records.',
          },
          {
            label: 'GST & Tax',
            path: '/sales-finance/gst-tax',
            description: 'Review tax configuration, GST calculations, and compliance data.',
          },
          {
            label: 'Revenue Analytics',
            path: '/sales-finance/revenue-analytics',
            description: 'Analyze revenue trends, collection performance, and growth.',
          },
        ],
      },
      {
        label: 'Marketing',
        icon: 'marketing',
        path: '/marketing',
        expanded: false,
        description: 'Run offers, campaigns, banners, and customer communication flows.',
        children: [
          {
            label: 'Coupons & Offers',
            path: '/marketing/coupons-offers',
            description: 'Create discount codes, seasonal offers, and promotional rules.',
          },
          {
            label: 'Banners',
            path: '/marketing/banners',
            description: 'Manage homepage and campaign banners across the storefront.',
          },
          {
            label: 'Email Campaigns',
            path: '/marketing/email-campaigns',
            description: 'Plan and review customer email campaigns and engagement.',
          },
          {
            label: 'Push Notifications',
            path: '/marketing/push-notifications',
            description: 'Configure push notifications for alerts, campaigns, and reminders.',
          },
        ],
      },
      {
        label: 'Vendors',
        icon: 'vendors',
        path: '/vendors',
        description: 'Manage vendor profiles, onboarding, and supply-side coordination.',
      },
    ],
  },
  {
    id: 'secondary',
    title: '',
    items: [
      {
        label: 'CMS',
        icon: 'cms',
        path: '/cms',
        expanded: false,
        description: 'Manage storefront content, information pages, and SEO assets.',
        children: [
          {
            label: 'Pages',
            path: '/cms/pages',
            description: 'Edit static pages and key storefront information screens.',
          },
          {
            label: 'Blogs',
            path: '/cms/blogs',
            description: 'Create and manage blog content for marketing and discovery.',
          },
          {
            label: 'FAQs',
            path: '/cms/faqs',
            description: 'Maintain frequently asked questions and help content.',
          },
          {
            label: 'SEO Management',
            path: '/cms/seo-management',
            description: 'Configure metadata, keywords, and search optimization settings.',
          },
        ],
      },
      {
        label: 'Reports',
        icon: 'reports',
        path: '/reports',
        expanded: false,
        description: 'Access operational and performance reports across the business.',
        children: [
          {
            label: 'Sales Reports',
            path: '/reports/sales-reports',
            description: 'Review sales performance by product, period, and channel.',
          },
          {
            label: 'Customer Reports',
            path: '/reports/customer-reports',
            description: 'Analyze customer behavior, retention, and segmentation.',
          },
          {
            label: 'Inventory Reports',
            path: '/reports/inventory-reports',
            description: 'Track stock movement, aging inventory, and replenishment trends.',
          },
          {
            label: 'Revenue & Profit',
            path: '/reports/revenue-profit',
            description: 'Measure profitability, margins, and overall revenue health.',
          },
        ],
      },
      {
        label: 'Staff & Roles',
        icon: 'staff',
        path: '/staff-roles',
        description: 'Manage admin users, permissions, and internal access control.',
      },
      {
        label: 'Settings',
        icon: 'settings',
        path: '/settings',
        description: 'Update system preferences, platform options, and configuration.',
      },
    ],
  },
]

export const menuRoutes = sidebarSections.flatMap((section) =>
  section.items.flatMap((item) => {
    const parentRoute = item.path
      ? [
          {
            path: item.path,
            label: item.label,
            description: item.description,
            isParent: true,
          },
        ]
      : []

    const childRoutes =
      item.children?.map((child) => ({
        path: child.path,
        label: child.label,
        description: child.description,
        parentLabel: item.label,
      })) ?? []

    return [...parentRoute, ...childRoutes]
  }),
)
