class Post < ApplicationRecord
  include Visible

  validates_presence_of :title
  has_rich_text :content
  validates :content, presence: true, length: { minimum: 5 }

  has_many :comments, dependent: :destroy
end
