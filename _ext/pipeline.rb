require File.expand_path '../haml/filters/asciidoc.rb', __FILE__

Awestruct::Extensions::Pipeline.new do
  helper Awestruct::Extensions::Partial
  extension Awestruct::Extensions::Posts.new '/blog'
  extension Awestruct::Extensions::Paginator.new :posts, '/blog'
  extension Awestruct::Extensions::Indexifier.new
  # Indexifier *must* come before Atomizer
  extension Awestruct::Extensions::Atomizer.new :posts, '/blog.atom', :template => '_template.atom.haml'
end
