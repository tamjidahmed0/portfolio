// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Base')
    .items([
      S.documentTypeListItem('profile').title('Profile'),
      S.documentTypeListItem('home').title('Home'),
      S.documentTypeListItem('resume').title('Resume'),
      S.documentTypeListItem('projects').title('Projects'),
      S.divider(),
      S.documentTypeListItem('seo').title('Seo'),

      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['profile', 'home', 'resume', 'projects', 'seo'].includes(item.getId()),
      ),
    ])
  
  



    