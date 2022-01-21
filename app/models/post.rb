class Post < ApplicationRecord
  include Visible

  validates_presence_of :title
  has_rich_text :content
  validates :content, presence: true, length: { minimum: 5 }

  has_many :comments, dependent: :destroy

  after_create_commit { broadcast_append_to('posts', partial: 'posts/post', locals: { 'show': true }) }
  after_destroy_commit { broadcast_remove_to('posts') }
  after_update_commit { broadcast_update_to('posts', partial: 'posts/post', locals: { 'show': true }) }
end
