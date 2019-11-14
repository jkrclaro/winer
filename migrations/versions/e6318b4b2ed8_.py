"""empty message

Revision ID: e6318b4b2ed8
Revises: 1d9f82c8c2b7
Create Date: 2019-07-16 23:26:38.492361

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'e6318b4b2ed8'
down_revision = '1d9f82c8c2b7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('profiles')
    op.drop_constraint('menus_merchant_id_fkey', 'menus', type_='foreignkey')
    op.drop_constraint('products_merchant_id_fkey', 'products', type_='foreignkey')
    op.drop_table('merchant')
    op.create_foreign_key(None, 'menus', 'merchants', ['merchant_id'], ['id'], ondelete='CASCADE')
    op.create_foreign_key(None, 'products', 'merchants', ['merchant_id'], ['id'], ondelete='CASCADE')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'products', type_='foreignkey')
    op.create_foreign_key('products_merchant_id_fkey', 'products', 'merchant', ['merchant_id'], ['id'], ondelete='CASCADE')
    op.drop_constraint(None, 'menus', type_='foreignkey')
    op.create_foreign_key('menus_merchant_id_fkey', 'menus', 'merchant', ['merchant_id'], ['id'], ondelete='CASCADE')
    op.create_table('merchant',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('address', sa.VARCHAR(length=255), autoincrement=False, nullable=True),
    sa.Column('user_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('created_at', postgresql.TIMESTAMP(), server_default=sa.text('now()'), autoincrement=False, nullable=True),
    sa.Column('updated_at', postgresql.TIMESTAMP(), server_default=sa.text('now()'), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name='merchant_user_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='merchant_pkey')
    )
    op.create_table('profiles',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('name', sa.VARCHAR(length=255), autoincrement=False, nullable=True),
    sa.Column('user_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('created_at', postgresql.TIMESTAMP(), server_default=sa.text('now()'), autoincrement=False, nullable=True),
    sa.Column('updated_at', postgresql.TIMESTAMP(), server_default=sa.text('now()'), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name='profiles_user_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='profiles_pkey')
    )
    # ### end Alembic commands ###