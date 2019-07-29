"""empty message

Revision ID: aba3817b4f39
Revises: 2119b66b28ee
Create Date: 2019-07-09 14:28:04.261869

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'aba3817b4f39'
down_revision = '2119b66b28ee'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('inventories', sa.Column('quantity', sa.Integer(), nullable=True))
    op.drop_column('inventories', 'available')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('inventories', sa.Column('available', sa.INTEGER(), autoincrement=False, nullable=True))
    op.drop_column('inventories', 'quantity')
    # ### end Alembic commands ###