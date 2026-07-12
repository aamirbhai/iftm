# WordPress Headless CMS Setup Guide for IFTM University

## 1. Install WordPress on IONOS

1. Log in to IONOS control panel
2. Go to "Websites & Domains"
3. Click "WordPress" under "Applications"
4. Install WordPress on a subdomain (e.g., `cms.iftmuniversity.ac.in`)

## 2. Install Required Plugins

After WordPress installation, install these plugins:

### WPGraphQL
- Go to Plugins → Add New
- Search "WPGraphQL"
- Install and activate

### Advanced Custom Fields (ACF)
- Go to Plugins → Add New
- Search "Advanced Custom Fields"
- Install and activate

### ACF to WPGraphQL
- Go to Plugins → Add New
- Search "ACF to WPGraphQL"
- Install and activate

### WP CORS
- Go to Plugins → Add New
- Search "WP CORS"
- Install and activate

## 3. Configure CORS Headers

Add this to your theme's `functions.php` or use WP CORS plugin:

```php
function add_cors_http_header() {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
}
add_action('init', 'add_cors_http_header');
```

## 4. Create Custom Post Types

Add to `functions.php`:

```php
// Register News Post Type
function create_news_post_type() {
    register_post_type('news', array(
        'labels' => array(
            'name' => 'News',
            'singular_name' => 'News',
        ),
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true,
        'show_in_graphql' => true,
        'graphql_single_name' => 'newsItem',
        'graphql_plural_name' => 'newsItems',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'rewrite' => array('slug' => 'news'),
    ));
}
add_action('init', 'create_news_post_type');

// Register Programme Post Type
function create_programme_post_type() {
    register_post_type('programme', array(
        'labels' => array(
            'name' => 'Programmes',
            'singular_name' => 'Programme',
        ),
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true,
        'show_in_graphql' => true,
        'graphql_single_name' => 'programme',
        'graphql_plural_name' => 'programmes',
        'supports' => array('title', 'editor', 'thumbnail'),
        'rewrite' => array('slug' => 'programmes'),
    ));
}
add_action('init', 'create_programme_post_type');
```

## 5. Create ACF Field Groups

### Blog Post Fields
- Read Time (Text)
- Author Name (Text)

### News Fields
- Department (Text)
- Source URL (URL)

### Programme Fields
- School (Text)
- Level (Select: UG, PG, Diploma, Ph.D.)
- Duration (Text)
- Eligibility (Textarea)
- Fee (Text)
- Overview (WYSIWYG Editor)
- Curriculum (WYSIWYG Editor)
- Career Prospects (WYSIWYG Editor)

## 6. Configure GraphQL Settings

1. Go to GraphQL → Settings
2. Enable "Public Introspection"
3. Set "Max Posts Per Page" to 100

## 7. Test GraphQL Endpoint

Visit: `https://cms.iftmuniversity.ac.in/graphql`

Test query:
```graphql
{
  posts {
    nodes {
      id
      title
      slug
    }
  }
}
```

## 8. Environment Variables

Add to `.env.local`:
```
WORDPRESS_API_URL=https://cms.iftmuniversity.ac.in/graphql
WORDPRESS_SITE_URL=https://cms.iftmuniversity.ac.in
```

## 9. CORS Configuration for IONOS

If CORS headers don't work via plugin, add to `.htaccess`:

```
Header set Access-Control-Allow-Origin "*"
Header set Access-Control-Allow-Methods "GET, POST, OPTIONS"
Header set Access-Control-Allow-Headers "Content-Type, Authorization"
```
