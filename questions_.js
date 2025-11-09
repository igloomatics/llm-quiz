const questionsData = [
    // ==================== Transformer入门专题 ====================
    {
        id: 1,
        type: '选择',
        topic: 'Transformer入门',
        difficulty: '入门',
        question: 'Transformer模型最初是为哪个任务设计的？',
        options: [
            'A. 图像分类',
            'B. 机器翻译',
            'C. 语音识别',
            'D. 目标检测'
        ],
        correct: 1,
        explanation: 'Transformer最初在论文《Attention is All You Need》(2017)中提出，是为了解决机器翻译任务。它完全抛弃了RNN和CNN，仅使用注意力机制，在WMT 2014英德和英法翻译任务上取得了SOTA性能。'
    },
    {
        id: 2,
        type: '选择',
        topic: 'Transformer入门',
        difficulty: '入门',
        question: 'Self-Attention机制的核心优势是什么？',
        options: [
            'A. 减少模型参数',
            'B. 可以并行计算，捕捉长距离依赖',
            'C. 降低计算复杂度',
            'D. 避免梯度消失'
        ],
        correct: 1,
        explanation: 'Self-Attention的核心优势是：1) 可以并行计算所有位置的关系，不像RNN需要顺序处理；2) 任意两个位置之间都可以直接交互，路径长度为O(1)，轻松捕捉长距离依赖。这使得Transformer训练更快，效果更好。'
    },
    {
        id: 3,
        type: '选择',
        topic: 'Transformer入门',
        difficulty: '入门',
        question: 'Transformer的Encoder和Decoder各由几个相同的层堆叠而成？',
        options: [
            'A. 4层',
            'B. 6层',
            'C. 8层',
            'D. 12层'
        ],
        correct: 1,
        explanation: '原始Transformer论文(Attention is All You Need)中，Encoder和Decoder都是6层。这个数字是一个超参数，BERT-base使用12层，BERT-large使用24层，GPT-3使用96层。层数越多，模型容量越大，但计算成本也越高。'
    },
    {
        id: 4,
        type: '选择',
        topic: 'Transformer入门',
        difficulty: '入门',
        question: '为什么Transformer需要位置编码(Positional Encoding)？',
        options: [
            'A. 增加模型容量',
            'B. Self-Attention本身不包含位置信息',
            'C. 防止过拟合',
            'D. 加速训练'
        ],
        correct: 1,
        explanation: 'Self-Attention计算时对输入顺序是不敏感的（置换不变性），即[A,B,C]和[C,B,A]会得到相同的结果。但序列的顺序信息非常重要（如"猫吃鱼"和"鱼吃猫"意思完全不同），因此需要通过位置编码将位置信息注入到模型中。'
    },
    {
        id: 5,
        type: '选择',
        topic: 'Transformer入门',
        difficulty: '入门',
        question: 'Multi-Head Attention中，原始论文使用了多少个attention头？',
        options: [
            'A. 4个',
            'B. 8个',
            'C. 16个',
            'D. 32个'
        ],
        correct: 1,
        explanation: '原始Transformer使用8个attention头。多头机制将d_model维度的特征分成h个头，每个头的维度是d_k=d_model/h。多个头可以学习不同的表示子空间，捕捉不同类型的依赖关系，类似于CNN中的多个卷积核。'
    },
    {
        id: 6,
        type: '选择',
        topic: 'Transformer入门',
        difficulty: '入门',
        question: 'Scaled Dot-Product Attention中，为什么要除以√d_k进行缩放？',
        options: [
            'A. 加快计算速度',
            'B. 防止点积值过大导致softmax梯度消失',
            'C. 减少内存占用',
            'D. 增加模型非线性'
        ],
        correct: 1,
        explanation: '当d_k较大时，Q和K的点积值会变得很大，导致softmax函数进入饱和区，梯度变得非常小（梯度消失）。除以√d_k可以将方差控制在1左右，使得softmax的输入保持在合理范围内，梯度更健康，训练更稳定。'
    },
    {
        id: 7,
        type: '选择',
        topic: 'Transformer入门',
        difficulty: '入门',
        question: 'Feed-Forward Network (FFN)的隐藏层维度通常是输入维度的多少倍？',
        options: [
            'A. 1倍',
            'B. 2倍',
            'C. 4倍',
            'D. 8倍'
        ],
        correct: 2,
        explanation: 'FFN的隐藏层维度通常是d_model的4倍。例如d_model=512时，FFN的隐藏层是2048。这个"瓶颈-扩展-瓶颈"的结构提供了更大的表示空间，使模型能学习更复杂的变换。FFN的参数量通常占Transformer总参数的2/3左右。'
    },
    {
        id: 8,
        type: '选择',
        topic: 'Transformer入门',
        difficulty: '入门',
        question: 'Decoder中的Masked Self-Attention的作用是什么？',
        options: [
            'A. 过滤无关信息',
            'B. 防止看到未来的信息，确保自回归生成',
            'C. 减少计算量',
            'D. 增强模型泛化能力'
        ],
        correct: 1,
        explanation: 'Decoder使用Masked Self-Attention确保在预测位置i时，只能看到位置i及之前的信息，不能看到未来（位置i+1之后）的信息。这对于自回归生成至关重要，否则模型在训练时就能"作弊"看到答案，测试时无法正确生成。'
    },
    {
        id: 9,
        type: '选择',
        topic: 'Transformer入门',
        difficulty: '入门',
        question: 'BERT和GPT最主要的架构区别是什么？',
        options: [
            'A. BERT使用CNN，GPT使用RNN',
            'B. BERT使用Encoder，GPT使用Decoder',
            'C. BERT是判别式模型，GPT是生成式模型',
            'D. BERT是单向的，GPT是双向的'
        ],
        correct: 1,
        explanation: 'BERT使用Transformer的Encoder部分，可以双向看到上下文，适合理解任务（分类、问答等）。GPT使用Decoder部分，只能看到之前的token，适合生成任务。BERT通过MLM进行预训练，GPT通过自回归语言模型进行预训练。选项C也对但不是架构区别。'
    },
    {
        id: 10,
        type: '选择',
        topic: 'Transformer入门',
        difficulty: '入门',
        question: '在Transformer中，残差连接(Residual Connection)的主要作用是什么？',
        options: [
            'A. 增加模型深度',
            'B. 缓解梯度消失，使深层网络更容易训练',
            'C. 减少参数量',
            'D. 提高推理速度'
        ],
        correct: 1,
        explanation: '残差连接通过x + Sublayer(x)的形式，为梯度提供了一条直接的反向传播路径。这使得即使网络很深（如BERT的24层），梯度也能有效地流回浅层，避免梯度消失问题。残差连接是训练深层Transformer的关键技术。'
    },

    // ==================== Transformer进阶专题 ====================
    {
        id: 11,
        type: '选择',
        topic: 'Transformer进阶',
        difficulty: '进阶',
        question: 'Transformer的时间复杂度和空间复杂度分别是多少？（序列长度n，模型维度d）',
        options: [
            'A. 时间O(n²d)，空间O(nd)',
            'B. 时间O(n²d)，空间O(n²)',
            'C. 时间O(nd²)，空间O(n²)',
            'D. 时间O(n³)，空间O(nd)'
        ],
        correct: 1,
        explanation: '**Transformer复杂度分析**：\n\n**时间复杂度O(n²d)**：\n• Self-Attention需要计算n×n的注意力矩阵\n• 每个元素需要d维的点积计算\n• 总计算量：n² × d\n\n**空间复杂度O(n²)**：\n• 注意力权重矩阵：n×n\n• 这是主要的内存瓶颈\n• 限制了处理长序列的能力\n\n**对比RNN**：\n• RNN时间：O(nd²)（顺序计算n步，每步d²）\n• RNN空间：O(d)（只需保存隐状态）\n• Transformer用空间换时间，实现并行\n\n**长序列问题**：\n• n=512时，注意力矩阵：512×512=256K\n• n=2048时，注意力矩阵：2048×2048=4M\n• 这就是为什么需要Sparse Attention、Linformer等优化'
    },
    {
        id: 12,
        type: '选择',
        topic: 'Transformer进阶',
        difficulty: '进阶',
        question: '为什么Transformer使用Layer Normalization而不是Batch Normalization？',
        options: [
            'A. Layer Norm计算更快',
            'B. Layer Norm对batch size不敏感，适合NLP的可变长度序列',
            'C. Layer Norm参数更少',
            'D. Batch Norm在Transformer中效果更好'
        ],
        correct: 1,
        explanation: '**Layer Norm vs Batch Norm**：\n\n**Batch Norm的问题**：\n1. **依赖batch统计**：需要足够大的batch size\n2. **序列长度不一致**：NLP中序列长度差异大，padding会影响统计\n3. **推理时不稳定**：需要保存训练时的统计量\n\n**Layer Norm的优势**：\n1. **独立于batch**：在特征维度上归一化，每个样本独立\n2. **适合序列**：不受序列长度影响\n3. **训练=推理**：不需要额外统计量\n4. **稳定性好**：对batch size不敏感\n\n**数学上**：\n• Batch Norm：E[x]和Var[x]在batch维度计算\n• Layer Norm：E[x]和Var[x]在特征维度计算\n\n**位置**：\n• Post-LN：x = LN(x + Sublayer(x))\n• Pre-LN：x = x + Sublayer(LN(x))（更稳定）\n\n现代大模型（GPT、BERT）都用Layer Norm。'
    },
    {
        id: 13,
        type: '选择',
        topic: 'Transformer进阶',
        difficulty: '进阶',
        question: 'Transformer训练时的学习率策略通常使用warmup，原因是什么？',
        options: [
            'A. 防止一开始学习率过大导致梯度爆炸',
            'B. 加速收敛',
            'C. 减少过拟合',
            'D. 提高最终精度'
        ],
        correct: 0,
        explanation: '**Warmup策略**：\n\n**为什么需要warmup**：\n1. **参数初始化随机**：刚开始时，参数方差较大\n2. **Adam优化器**：依赖二阶矩估计，刚开始不准确\n3. **梯度不稳定**：大学习率会导致训练发散\n4. **LayerNorm影响**：初期统计量不稳定\n\n**Warmup过程**：\n```\nlr = d_model^(-0.5) * min(step^(-0.5), step * warmup_steps^(-1.5))\n```\n\n**典型设置**：\n• warmup_steps = 4000（原始论文）\n• 线性增长到峰值，然后平方根衰减\n\n**效果**：\n• 前期小学习率：稳定训练\n• 后期大学习率：快速收敛\n• 最后衰减：精细优化\n\n**不用warmup的后果**：\n• 训练初期loss震荡\n• 可能无法收敛\n• 最终效果差\n\n现代几乎所有Transformer都使用warmup（BERT、GPT等）。'
    },
    {
        id: 14,
        type: '选择',
        topic: 'Transformer进阶',
        difficulty: '进阶',
        question: '关于Transformer的位置编码，以下哪种说法是错误的？',
        options: [
            'A. 可以使用可学习的位置编码代替固定的sin/cos编码',
            'B. 位置编码使得模型能够利用序列的顺序信息',
            'C. sin/cos位置编码可以外推到训练时未见过的序列长度',
            'D. 位置编码必须和token embedding相乘'
        ],
        correct: 3,
        explanation: '**选项D是错误的**：位置编码是**相加**而非相乘！\n\n**位置编码详解**：\n\n**1. 固定式（sin/cos）**：\n```python\nPE(pos, 2i) = sin(pos / 10000^(2i/d_model))\nPE(pos, 2i+1) = cos(pos / 10000^(2i/d_model))\n```\n• 优点：可外推到更长序列\n• 缺点：不能学习任务特定的位置模式\n\n**2. 可学习式**：\n• BERT使用：nn.Embedding(max_len, d_model)\n• 优点：可学习最优位置表示\n• 缺点：无法外推到>max_len的序列\n\n**3. 相对位置编码**：\n• Transformer-XL、T5使用\n• 编码相对距离而非绝对位置\n• 泛化性更好\n\n**4. RoPE (Rotary Position Embedding)**：\n• 旋转位置编码，用于GPT-3等\n• 通过旋转矩阵注入位置信息\n• 效果更好，外推能力强\n\n**关键**：位置编码是**加**到token embedding上，公式：\n```\noutput = token_emb + pos_emb\n```\n而不是相乘！'
    },
    {
        id: 15,
        type: '选择',
        topic: 'Transformer进阶',
        difficulty: '进阶',
        question: 'Flash Attention的核心优化思想是什么？',
        options: [
            'A. 减少attention head的数量',
            'B. 使用稀疏attention矩阵',
            'C. 通过分块计算和kernel fusion减少HBM访问',
            'D. 用线性attention替代softmax'
        ],
        correct: 2,
        explanation: '**Flash Attention核心思想**：\n\n**问题**：标准attention的瓶颈在于**内存访问**而非计算\n• GPU的HBM（高带宽内存）访问很慢\n• 注意力矩阵n×n需要频繁读写HBM\n\n**Flash Attention优化**：\n\n**1. Tiling（分块）**：\n• 将Q、K、V分成小块\n• 每块可以放入SRAM（快速内存）\n• 避免整个矩阵的HBM读写\n\n**2. Kernel Fusion**：\n• 将多个操作融合到一个CUDA kernel\n• Softmax、dropout、matmul融合\n• 减少中间结果的HBM访问\n\n**3. Recomputation**：\n• 反向传播时重新计算attention\n• 而不是保存整个n×n矩阵\n• 用计算换内存\n\n**效果**：\n• 2-4倍训练加速\n• 10-20倍内存减少\n• 支持更长序列（如16K tokens）\n\n**对比其他方法**：\n• Sparse Attention（选项B）：改变计算模式\n• Linear Attention（选项D）：改变attention机制\n• Flash Attention：保持原始attention，只优化实现\n\n被GPT-4、LLaMA等大模型广泛采用。'
    },
    {
        id: 16,
        type: '选择',
        topic: 'Transformer进阶',
        difficulty: '进阶',
        question: 'Transformer的Decoder在训练和推理时有什么重要区别？',
        options: [
            'A. 训练时使用teacher forcing，推理时自回归生成',
            'B. 训练时使用梯度下降，推理时使用贪心搜索',
            'C. 训练时需要mask，推理时不需要',
            'D. 没有区别'
        ],
        correct: 0,
        explanation: '**训练 vs 推理的关键区别**：\n\n**训练时（Teacher Forcing）**：\n• 输入：完整的目标序列（ground truth）\n• 过程：一次性计算所有位置的loss\n• Mask：使用causal mask防止看到未来\n• 并行：所有位置并行计算\n• 速度：快，利用GPU并行\n\n**示例**：\n```\n输入：[BOS] I love you\n目标：I love you [EOS]\nMask：下三角矩阵，确保t时刻只看到≤t的token\n```\n\n**推理时（Autoregressive）**：\n• 输入：逐步生成，从[BOS]开始\n• 过程：生成一个token，加入序列，继续生成\n• Mask：自然causal（只能看到已生成的）\n• 顺序：必须顺序生成，无法并行\n• 速度：慢，n步生成n个token\n\n**推理过程**：\n```\nStep 1: [BOS] → predict "I"\nStep 2: [BOS] I → predict "love"\nStep 3: [BOS] I love → predict "you"\nStep 4: [BOS] I love you → predict [EOS]\n```\n\n**Teacher Forcing的优势**：\n• 训练快：并行计算\n• 稳定：不累积误差\n\n**Exposure Bias问题**：\n• 训练时总是看到正确的历史\n• 推理时可能生成错误，误差累积\n• 解决：Scheduled Sampling等技术'
    },
    {
        id: 17,
        type: '选择',
        topic: 'Transformer进阶',
        difficulty: '进阶',
        question: '为什么Transformer的FFN隐藏层维度通常是d_model的4倍？',
        options: [
            'A. 这是理论证明的最优值',
            'B. 经验值，提供足够的表达能力同时不过于庞大',
            'C. 为了匹配attention层的参数量',
            'D. 必须是4倍才能训练'
        ],
        correct: 1,
        explanation: '**FFN维度选择的考量**：\n\n**为什么是4倍（d_ff = 4 × d_model）**：\n\n**1. 经验性选择**：\n• 原始论文：d_model=512, d_ff=2048\n• 不是理论推导，而是实验得出\n• 在效果和效率间取得平衡\n\n**2. 表达能力**：\n• FFN提供非线性变换\n• 更大的隐藏层 = 更强的表达能力\n• 4倍提供足够的"瓶颈-扩展-瓶颈"空间\n\n**3. 参数分配**：\n• FFN参数：2 × d_model × d_ff = 8 × d_model²\n• Attention参数：4 × d_model² (Q,K,V,O四个矩阵)\n• FFN约占总参数的2/3\n\n**4. 不同模型的选择**：\n• BERT：4倍（768→3072）\n• GPT-2/3：4倍\n• LLaMA：采用SwiGLU，约2.7倍\n• GLM：更大的比例\n\n**太小的问题**：\n• 表达能力不足\n• 模型欠拟合\n\n**太大的问题**：\n• 参数暴增\n• 训练和推理变慢\n• 可能过拟合\n\n**结论**：4倍是个"甜点"，但不是硬性规定。现代模型会根据需求调整。'
    },
    {
        id: 18,
        type: '选择',
        topic: 'Transformer进阶',
        difficulty: '进阶',
        question: 'Pre-LN和Post-LN的主要区别是什么？',
        options: [
            'A. Pre-LN在残差之前做归一化，训练更稳定',
            'B. Post-LN效果更好但训练困难',
            'C. Pre-LN不需要warmup',
            'D. 以上都对'
        ],
        correct: 3,
        explanation: '**Pre-LN vs Post-LN**：\n\n**Post-LN（原始Transformer）**：\n```python\nx = x + Sublayer(x)\nx = LayerNorm(x)\n```\n• 先残差，后归一化\n• 优点：理论上梯度流动更好\n• 缺点：训练不稳定，需要warmup\n• 深层模型难以训练\n\n**Pre-LN（现代主流）**：\n```python\nx = x + Sublayer(LayerNorm(x))\n```\n• 先归一化，后残差\n• 优点：训练非常稳定\n• 优点：可以不用warmup\n• 优点：更容易训练深层模型\n• 缺点：理论上最终效果可能略差\n\n**为什么Pre-LN更稳定**：\n1. **梯度范数更稳定**：LN控制了输入范围\n2. **残差路径干净**：梯度可以直接通过残差回传\n3. **初始化不敏感**：对参数初始化要求低\n\n**实践中**：\n• GPT-2/3：Post-LN + 小心调参\n• BERT：Post-LN + warmup\n• GPT-Neo, OPT：Pre-LN\n• LLaMA：Pre-LN + RMSNorm\n\n**趋势**：现代大模型几乎都用Pre-LN，训练更容易，效果也不差。\n\n所以选项A、B、C都正确，答案是D！'
    },
    {
        id: 19,
        type: '选择',
        topic: 'Transformer进阶',
        difficulty: '进阶',
        question: '关于Transformer的并行化，以下说法错误的是：',
        options: [
            'A. Self-Attention层内所有位置可以并行计算',
            'B. FFN层内所有位置可以并行计算',
            'C. 训练时Encoder和Decoder可以完全并行',
            'D. 多个Encoder层之间必须顺序计算'
        ],
        correct: 2,
        explanation: '**选项C是错误的**：Encoder和Decoder不能完全并行！\n\n**Transformer的并行性分析**：\n\n**可以并行的部分**：\n\n**1. Self-Attention内部（选项A ✓）**：\n• 所有位置的Q、K、V可以并行计算\n• 注意力权重矩阵可以并行计算\n• 这是Transformer相比RNN的巨大优势\n\n**2. FFN内部（选项B ✓）**：\n• 每个位置的FFN独立\n• 所有位置可以并行\n• Position-wise的含义\n\n**3. 训练时的并行**：\n• Encoder：所有位置并行\n• Decoder：teacher forcing，所有位置并行\n• 但Encoder必须先完成，Decoder才能开始（选项C ✗）\n\n**必须顺序的部分**：\n\n**1. Encoder/Decoder层之间（选项D ✓）**：\n• Layer 1 → Layer 2 → ... → Layer N\n• 每层依赖上一层的输出\n• 无法并行\n\n**2. Encoder → Decoder**：\n• Decoder的Cross-Attention需要Encoder输出\n• Encoder必须完全计算完\n• 不能并行\n\n**3. 推理时的Decoder**：\n• 自回归生成，必须顺序\n• t时刻依赖t-1的输出\n\n**总结**：\n• 横向（位置间）：可以并行 ⚡\n• 纵向（层间）：必须顺序 🔄\n• Encoder → Decoder：必须顺序 🔄'
    },
    {
        id: 20,
        type: '选择',
        topic: 'Transformer进阶',
        difficulty: '进阶',
        question: 'Sparse Attention的主要目的是什么？',
        options: [
            'A. 减少参数量',
            'B. 降低计算和空间复杂度，处理更长序列',
            'C. 提高模型精度',
            'D. 加速训练'
        ],
        correct: 1,
        explanation: '**Sparse Attention的动机**：\n\n**标准Attention的问题**：\n• 时间复杂度：O(n²d)\n• 空间复杂度：O(n²)\n• n=1024时，需要1M的注意力矩阵\n• n=4096时，需要16M的注意力矩阵！\n\n**Sparse Attention的思想**：\n不是每个位置都需要attend到所有其他位置\n\n**常见的Sparse模式**：\n\n**1. Local Attention（局部注意力）**：\n• 只attend到附近k个位置\n• 复杂度：O(nkd)\n• 适合：文本具有局部性\n\n**2. Strided Attention（跨步注意力）**：\n• 每隔s个位置attend一次\n• 捕捉长距离依赖\n• Sparse Transformer使用\n\n**3. Block Sparse Attention**：\n• 将序列分块，块内dense，块间sparse\n• BigBird使用\n\n**4. Random Attention**：\n• 随机选择一些位置attend\n• Longformer使用\n\n**5. Learned Sparsity**：\n• 学习哪些位置重要\n• Routing Transformer\n\n**效果**：\n• 复杂度从O(n²)降到O(n log n)或O(n)\n• 可以处理4K-64K长度的序列\n• 性能损失很小（<1%）\n\n**应用**：\n• Longformer：文档理解\n• BigBird：长文本处理\n• Sparse Transformer：音频、图像生成'
    },
    {
        id: 21,
        type: '多选',
        topic: 'Transformer进阶',
        difficulty: '进阶',
        question: '关于Transformer的正则化技术，以下哪些是常用的？（多选）',
        options: [
            'A. Dropout',
            'B. Weight Decay',
            'C. Label Smoothing',
            'D. Data Augmentation'
        ],
        correct: [0, 1, 2, 3],
        explanation: '**Transformer的正则化技术（全部都用！）**：\n\n**A. Dropout ✓**：\n• **位置**：Attention后、FFN后、Embedding后\n• **比例**：通常0.1-0.3\n• **作用**：防止过拟合，增强泛化\n• **注意**：推理时关闭\n\n**B. Weight Decay ✓**：\n• **也叫L2正则化**\n• **作用**：限制参数范数，防止过拟合\n• **值**：通常0.01-0.1\n• **Adam优化器**：AdamW将weight decay解耦\n\n**C. Label Smoothing ✓**：\n• **原理**：软化one-hot标签\n• **公式**：y = (1-ε)×one_hot + ε/K\n• **作用**：防止模型过度自信\n• **ε**：通常0.1\n• **效果**：提升泛化性能\n\n**D. Data Augmentation ✓**：\n• **NLP中的方法**：\n  - 同义词替换\n  - 回译（back translation）\n  - 随机删除/插入\n  - Mixup（句子级别混合）\n• **作用**：增加训练数据多样性\n• **效果**：显著提升鲁棒性\n\n**其他技术**：\n• **Gradient Clipping**：防止梯度爆炸\n• **Early Stopping**：防止过拟合\n• **Stochastic Depth**：随机丢弃层\n\n**实践中**：\n• BERT：Dropout + Weight Decay + Label Smoothing\n• GPT：Dropout + Weight Decay\n• T5：所有技术组合使用\n\n所以答案是ABCD全选！正则化是训练好模型的关键。'
    },
    {
        id: 22,
        type: '选择',
        topic: 'Transformer进阶',
        difficulty: '挑战',
        question: 'Transformer中Query、Key、Value的物理意义是什么？',
        options: [
            'A. Query是查询，Key是键，Value是值，类似字典结构',
            'B. Query是当前位置的需求，Key是其他位置的特征，Value是要提取的信息',
            'C. Query、Key、Value只是数学符号，没有特殊含义',
            'D. Query和Key用于计算相似度，Value包含实际内容'
        ],
        correct: 3,
        explanation: '**QKV的深层理解**：\n\n**最佳理解（选项D）**：\n\n**Query（查询）**：\n• 代表**当前位置的信息需求**\n• "我想关注什么？"\n• 来自：当前token的表示 × W_Q\n\n**Key（键）**：\n• 代表**其他位置的索引/特征**\n• "我能提供什么信息？"\n• 来自：所有token的表示 × W_K\n• 用于与Query匹配\n\n**Value（值）**：\n• 代表**实际要提取的内容**\n• "我的具体信息是什么？"\n• 来自：所有token的表示 × W_V\n• 根据attention权重被加权求和\n\n**计算过程**：\n```python\n# 1. 计算相似度（Q和K的匹配度）\nscores = Q @ K.T / sqrt(d_k)\n\n# 2. 归一化为权重\nweights = softmax(scores)\n\n# 3. 加权求和Value\noutput = weights @ V\n```\n\n**类比**：\n1. **信息检索**：\n   - Query：搜索词\n   - Key：文档标题/关键词\n   - Value：文档内容\n\n2. **数据库**：\n   - Query：WHERE条件\n   - Key：索引列\n   - Value：数据列\n\n**为什么要分离QKV**：\n1. **灵活性**：不同的投影矩阵学习不同方面\n2. **表达能力**：三个独立空间，表达力更强\n3. **解耦**：相似度计算（Q·K）和内容提取（V）分离\n\n**Self-Attention vs Cross-Attention**：\n• Self：Q、K、V都来自同一个序列\n• Cross：Q来自目标，K、V来自源（如翻译）'
    },
    {
        id: 23,
        type: '选择',
        topic: 'Transformer进阶',
        difficulty: '挑战',
        question: '为什么Transformer能够并行训练但RNN不行？本质原因是什么？',
        options: [
            'A. Transformer使用GPU优化算法',
            'B. Transformer的计算图不依赖时序，每个位置可以独立计算',
            'C. RNN参数太多',
            'D. Transformer使用了特殊的硬件加速'
        ],
        correct: 1,
        explanation: '**本质区别：计算依赖关系**\n\n**RNN的顺序依赖**：\n```python\nh_1 = f(x_1, h_0)      # 必须先算h_1\nh_2 = f(x_2, h_1)      # 依赖h_1\nh_3 = f(x_3, h_2)      # 依赖h_2\n...\n```\n• **数据依赖**：h_t依赖h_{t-1}\n• **无法并行**：必须等前一步完成\n• **顺序瓶颈**：即使有无限GPU也无法加速\n\n**Transformer的并行性**：\n```python\n# 所有位置同时计算\nQ = X @ W_Q  # 矩阵运算，并行\nK = X @ W_K\nV = X @ W_V\nAttention = softmax(Q @ K.T / sqrt(d)) @ V\n```\n• **无数据依赖**：每个位置的计算独立\n• **完全并行**：n个位置同时算\n• **时间不变**：O(1)时间（理想情况）\n\n**关键insight**：\n\n**RNN**：\n• 隐状态**串行传递**信息\n• 时间步t到t+1有因果依赖\n• 这是架构的本质限制\n\n**Transformer**：\n• 通过**全局注意力**一次性获取信息\n• 所有位置**直接交互**\n• 用位置编码代替顺序计算\n\n**训练时的对比**：\n• RNN：必须算n步，时间O(n)\n• Transformer：一次前向，时间O(1)（忽略矩阵乘法）\n\n**推理时**：\n• RNN：仍然顺序\n• Transformer：编码器并行，解码器顺序（自回归）\n\n**为什么Transformer能并行训练解码器**：\n• Teacher Forcing：已知完整目标序列\n• 用Mask实现因果性\n• 所有位置的loss同时计算\n\n这就是Transformer革命性的地方：**用空间（注意力矩阵）换时间（并行训练）**！'
    },
    {
        id: 24,
        type: '选择',
        topic: 'Transformer进阶',
        difficulty: '挑战',
        question: 'Attention中的温度参数(temperature)如何影响分布？',
        options: [
            'A. 温度越高，分布越平滑（接近均匀分布）',
            'B. 温度越高，分布越尖锐（接近one-hot）',
            'C. 温度不影响分布',
            'D. 温度只影响梯度'
        ],
        correct: 0,
        explanation: '**Temperature Scaling in Attention**\n\n**标准Softmax**：\n```python\nattention = softmax(Q @ K.T / sqrt(d_k))\n```\n\n**带温度的Softmax**：\n```python\nattention = softmax(Q @ K.T / (sqrt(d_k) * T))\n```\n\n**温度T的效果**：\n\n**T → 0（温度低）**：\n• Softmax变得**极其尖锐**\n• 接近argmax（one-hot）\n• 只关注最相关的位置\n• 示例：[0.05, 0.90, 0.05] → [0.0, 1.0, 0.0]\n\n**T = 1（标准）**：\n• 正常的softmax分布\n• 平衡的注意力分配\n\n**T → ∞（温度高）**：\n• Softmax变得**非常平滑**\n• 接近均匀分布\n• 关注所有位置\n• 示例：[0.3, 0.4, 0.3] → [0.33, 0.34, 0.33]\n\n**数学原理**：\n```python\nsoftmax(x/T) = exp(x_i/T) / Σexp(x_j/T)\n```\n• T↓：指数差异放大，分布更尖锐\n• T↑：指数差异缩小，分布更平滑\n\n**应用场景**：\n\n**1. 训练稳定性**：\n• 高温度：探索更多，避免过早收敛\n• 低温度：exploit最优路径\n\n**2. 生成采样**：\n• T=0.7：创造性生成（多样性）\n• T=0：确定性生成（贪心）\n• GPT系列常用此技巧\n\n**3. 蒸馏（Knowledge Distillation）**：\n• 教师模型用高温度输出soft target\n• 学生模型学习平滑分布\n\n**4. Attention Entropy**：\n• 高温：高熵，不确定性大\n• 低温：低熵，确定性强\n\n**Transformer中**：\n• √d_k相当于固定温度\n• 有些工作尝试可学习的温度\n\n记忆技巧：**高温 = 热情均分 = 平滑；低温 = 冷酷专注 = 尖锐**'
    },
    {
        id: 25,
        type: '选择',
        topic: 'Transformer进阶',
        difficulty: '挑战',
        question: '为什么Transformer需要多头注意力（Multi-Head Attention）而不是单个大的注意力？',
        options: [
            'A. 多头可以并行计算，加速训练',
            'B. 多头可以学习不同表示子空间的依赖关系，增强表达能力',
            'C. 多头减少参数量',
            'D. 多头防止过拟合'
        ],
        correct: 1,
        explanation: '**Multi-Head Attention的深层原因**\n\n**为什么需要多头？（选项B正确）**\n\n**单头的局限性**：\n• 只有一个Q、K、V投影\n• 只能学习一种类型的依赖关系\n• 表达能力受限\n\n**多头的优势**：\n\n**1. 多种表示子空间**：\n```python\n# 每个头学习不同方面\nhead_1: 学习句法依赖（主谓宾）\nhead_2: 学习语义相关性\nhead_3: 学习共指关系\nhead_4: 学习位置邻近性\n...\n```\n\n**2. 类比CNN的多个卷积核**：\n• CNN：多个filter学习不同特征\n• Multi-Head：多个头学习不同注意力模式\n• 都是增强表达能力的方式\n\n**3. 参数不变**：\n```python\n单头：d_model × d_model = 512 × 512\n多头(8头)：8 × (64 × 512) = 8 × 32K = 256K ≈ 512×512\n```\n• 参数量相同！\n• 但表达能力更强\n\n**4. 梯度多样性**：\n• 不同头的梯度不同\n• 降低梯度方差\n• 训练更稳定\n\n**实验证据**：\n\n**可视化发现**：\n• Head 1：关注主语和动词\n• Head 2：关注定语和中心词\n• Head 3：关注长距离依赖\n• 每个头关注不同语言现象！\n\n**消融实验**：\n• 单头（大维度）：BLEU 25.3\n• 8头（分割维度）：BLEU 27.3\n• 多头显著更好\n\n**错误选项分析**：\n\n**A. 并行计算**：\n• 多头确实可以并行\n• 但这不是主要原因\n• 单头也能并行计算不同样本\n\n**C. 减少参数**：\n• 错！参数量基本相同\n• 甚至可能略多（多个投影矩阵）\n\n**D. 防止过拟合**：\n• 不是主要作用\n• Dropout才是防过拟合的\n\n**现代趋势**：\n• BERT-base：12头\n• GPT-3：96头\n• LLaMA：32头\n• 头数随模型增大而增加\n\n**总结**：Multi-Head = Ensemble of Attention，用多样性换表达力！'
    },
    {
        id: 26,
        type: '多选',
        topic: 'Transformer进阶',
        difficulty: '挑战',
        question: 'Transformer相比RNN的优势有哪些？（多选）',
        options: [
            'A. 可以并行训练，训练速度快',
            'B. 长距离依赖建模能力强',
            'C. 参数量更少',
            'D. 更容易捕捉全局信息'
        ],
        correct: [0, 1, 3],
        explanation: '**Transformer vs RNN 全面对比**\n\n**A. 并行训练 ✓**\n• **Transformer**：所有位置同时计算\n• **RNN**：必须顺序计算t₁→t₂→...→tₙ\n• **结果**：Transformer训练快10-100倍\n• **例子**：BERT训练4天 vs LSTM训练数周\n\n**B. 长距离依赖 ✓**\n• **Transformer**：任意两个位置直接交互，路径O(1)\n• **RNN**：信息需传递n步，路径O(n)\n• **结果**：Transformer轻松建模长距离\n• **例子**：LSTM难以跨越100+词，Transformer可以512+\n\n**C. 参数量更少 ✗**\n• **错误**！Transformer参数通常**更多**\n• **BERT-base**：110M参数\n• **LSTM（相似容量）**：~50M参数\n• **原因**：\n  - 多头注意力：4个投影矩阵\n  - FFN：占2/3参数\n  - 多层堆叠\n• **但**：Transformer用参数换效果和速度\n\n**D. 全局信息 ✓**\n• **Transformer**：Self-Attention看到整个序列\n• **RNN**：隐状态容量有限，远距离信息衰减\n• **结果**：Transformer捕捉全局模式更好\n• **例子**：文档级理解、长文摘要\n\n**其他对比**：\n\n**梯度流动**：\n• Transformer：残差连接，梯度直达\n• RNN：BPTT，梯度消失/爆炸\n\n**可解释性**：\n• Transformer：可视化attention权重\n• RNN：隐状态难以解释\n\n**扩展性**：\n• Transformer：容易扩展到数十亿参数\n• RNN：扩展困难\n\n**推理速度**：\n• Transformer编码：快（并行）\n• Transformer解码：慢（自回归）\n• RNN：都慢（顺序）\n\n**内存占用**：\n• Transformer：O(n²)，长序列问题\n• RNN：O(n)，内存友好\n\n**总结**：\n✓ 并行训练\n✓ 长距离依赖\n✓ 全局信息\n✗ 参数更少\n\n答案是**ABD**！'
    },
    {
        id: 27,
        type: '选择',
        topic: 'Transformer入门',
        difficulty: '入门',
        question: 'RNN为什么比不过Transformer？',
        options: [
            'A. RNN参数量更大，更容易过拟合',
            'B. RNN必须顺序计算无法并行，且长距离依赖建模困难',
            'C. RNN的激活函数选择有限',
            'D. RNN无法处理长序列'
        ],
        correct: 1,
        explanation: 'RNN的两个致命弱点：1) **无法并行化**：必须t₁→t₂→...→tₙ顺序计算，训练慢；2) **长距离依赖困难**：信息需要逐步传递，容易衰减。Transformer通过Self-Attention解决了这两个问题：所有位置可以并行计算，任意两个位置直接交互。'
    },
    {
        id: 28,
        type: '选择',
        topic: 'Transformer进阶',
        difficulty: '挑战',
        question: 'Transformer的位置编码为什么使用sin和cos函数？',
        options: [
            'A. 计算速度快',
            'B. 可以表示相对位置关系，且能外推到更长序列',
            'C. 随机选择的',
            'D. 为了归一化'
        ],
        correct: 1,
        explanation: '**Sin/Cos位置编码的设计理由**：\n\n**公式回顾**：\n```python\nPE(pos, 2i) = sin(pos / 10000^(2i/d_model))\nPE(pos, 2i+1) = cos(pos / 10000^(2i/d_model))\n```\n\n**为什么选择sin/cos？**\n\n**1. 相对位置关系**：\n• 三角函数恒等式：\n  ```\n  sin(α+β) = sin(α)cos(β) + cos(α)sin(β)\n  ```\n• PE(pos+k)可以表示为PE(pos)的线性组合\n• 模型可以学习相对位置\n\n**2. 外推能力**：\n• sin/cos是周期函数\n• 可以计算任意位置的编码\n• 训练长度512，推理可以到1024+\n• 可学习编码无法外推\n\n**3. 有界性**：\n• 值域[-1, 1]，稳定\n• 不会随位置增长而爆炸\n\n**4. 不同频率**：\n• 不同维度使用不同频率\n• 从10000^0到10000^1\n• 低维：高频，捕捉局部\n• 高维：低频，捕捉全局\n\n**可视化理解**：\n```\n维度0-1: ∿∿∿∿∿∿ (高频，短周期)\n维度2-3: ∿ ∿ ∿ ∿ (中频)\n维度510-511: ∿   ∿  (低频，长周期)\n```\n\n**对比其他方法**：\n\n**可学习位置编码**：\n• BERT使用：nn.Embedding(max_len, d_model)\n• 优点：可学习最优编码\n• 缺点：无法外推到>max_len\n• 缺点：需要训练\n\n**RoPE（旋转位置编码）**：\n• 更现代的方法\n• 通过旋转矩阵注入位置\n• 外推性能更好\n• GPT-NeoX、LLaMA使用\n\n**ALiBi（Attention with Linear Biases）**：\n• 在attention分数上加bias\n• 不需要位置编码\n• 外推能力极强\n\n**实验发现**：\n• Sin/cos vs 可学习：效果相当\n• 但sin/cos泛化更好\n• 对于固定长度任务，可学习可能略好\n\n**总结**：Sin/cos是优雅的数学解决方案，平衡了表达能力和泛化性！'
    },
    {
        id: 29,
        type: '选择',
        topic: 'Transformer进阶',
        difficulty: '挑战',
        question: 'Transformer训练时的梯度裁剪(Gradient Clipping)主要防止什么问题？',
        options: [
            'A. 梯度消失',
            'B. 梯度爆炸',
            'C. 过拟合',
            'D. 欠拟合'
        ],
        correct: 1,
        explanation: '**梯度裁剪的作用**：\n\n**梯度爆炸问题**：\n• **现象**：梯度范数突然变得极大\n• **后果**：\n  - 参数更新幅度过大\n  - 模型发散，loss变NaN\n  - 训练崩溃\n\n**在Transformer中**：\n• 残差连接传播梯度\n• 多层堆叠可能累积误差\n• Attention的softmax可能数值不稳定\n• 特别是训练初期\n\n**梯度裁剪方法**：\n\n**1. 按值裁剪（Clip by Value）**：\n```python\ngrad = torch.clamp(grad, -clip_value, clip_value)\n```\n• 简单粗暴\n• 不常用\n\n**2. 按范数裁剪（Clip by Norm）**：\n```python\ngrad_norm = grad.norm()\nif grad_norm > max_norm:\n    grad = grad * (max_norm / grad_norm)\n```\n• 保持梯度方向\n• 只限制大小\n• **最常用**\n\n**典型设置**：\n• BERT：max_norm = 1.0\n• GPT-2：max_norm = 1.0\n• Transformer原论文：未明确说明\n\n**为什么不能防止梯度消失**：\n• 梯度消失：梯度变得极小\n• Clipping只限制上界，不能放大梯度\n• 梯度消失需要：\n  - 残差连接\n  - LayerNorm\n  - 合适的初始化\n\n**实践经验**：\n• 大模型训练：必须用梯度裁剪\n• 小模型：可能不需要\n• 训练不稳定：先尝试裁剪\n\n**监控指标**：\n```python\ngrad_norm = torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm)\nif grad_norm > 10 * max_norm:\n    print("Warning: Large gradient!")\n```\n\n**与其他技术配合**：\n• Gradient Clipping：防爆炸\n• Residual Connection：防消失\n• LayerNorm：稳定训练\n• Warmup：初期稳定\n\n答案是**B：梯度爆炸**！'
    },
    {
        id: 30,
        type: '选择',
        topic: 'Transformer进阶',
        difficulty: '挑战',
        question: '关于Transformer的Decoder，训练时使用Teacher Forcing可能导致什么问题？',
        options: [
            'A. 训练速度变慢',
            'B. Exposure Bias：训练和推理的分布不匹配',
            'C. 参数量增加',
            'D. 无法收敛'
        ],
        correct: 1,
        explanation: '**Exposure Bias详解**：\n\n**Teacher Forcing训练**：\n```python\n# 训练时：输入总是ground truth\nInput:  [BOS] I love you\nTarget:  I love you [EOS]\nModel总是看到正确的历史\n```\n\n**自回归推理**：\n```python\n# 推理时：输入是模型自己生成的\nStep 1: [BOS] → "I"\nStep 2: [BOS] I → "love" (如果第1步错了，这步也会错)\nStep 3: [BOS] I love → "you"\n错误会累积！\n```\n\n**Exposure Bias问题**：\n\n**1. 分布不匹配**：\n• 训练：模型从未见过错误的输入\n• 推理：模型可能生成错误token\n• 结果：遇到自己的错误时不知所措\n\n**2. 误差累积**：\n• 第1步小错误 → 第2步概率分布偏移\n• 第2步错误 → 第3步更偏\n• 雪崩效应\n\n**3. 过度自信**：\n• 训练时总是对的，模型变得"自大"\n• 推理时遇到意外情况表现差\n\n**实例**：\n```\n正确：The cat sits on the mat\n训练完美，推理可能生成：\nThe cat sits om the mat  (错一个)\nThe cat sits om tge mat  (越来越离谱)\nThe cat sits om tge nsd  (完全崩溃)\n```\n\n**解决方法**：\n\n**1. Scheduled Sampling**：\n• 训练时随机使用模型预测代替ground truth\n• 概率从0逐渐增加到0.5\n• 让模型学会处理自己的错误\n\n**2. Curriculum Learning**：\n• 从简单到困难\n• 逐步增加自回归步数\n\n**3. Reinforcement Learning**：\n• 用RL微调，直接优化生成质量\n• 如RLHF（ChatGPT使用）\n\n**4. 数据增强**：\n• 训练数据加入噪声\n• 模拟推理时的错误\n\n**5. 更好的解码策略**：\n• Beam Search：保留多个候选\n• Nucleus Sampling：避免低质量token\n\n**为什么还用Teacher Forcing**：\n• 训练快：并行计算\n• 收敛稳定\n• 大多数情况够用\n• Exposure Bias影响有限（高质量数据）\n\n**现代趋势**：\n• 预训练阶段：Teacher Forcing\n• 微调阶段：加入Scheduled Sampling或RL\n\n答案是**B：Exposure Bias**！'
    },
    {
        id: 31,
        type: '选择',
        topic: 'Transformer进阶',
        difficulty: '挑战',
        question: 'Transformer的Cross-Attention和Self-Attention的主要区别是什么？',
        options: [
            'A. Cross-Attention的Q、K、V来自不同序列',
            'B. Cross-Attention不需要mask',
            'C. Cross-Attention参数量更少',
            'D. Cross-Attention计算更快'
        ],
        correct: 0,
        explanation: '**Self-Attention vs Cross-Attention**：\n\n**Self-Attention（自注意力）**：\n```python\n# Q、K、V都来自同一个序列\nQ = X @ W_Q\nK = X @ W_K  # 同一个X\nV = X @ W_V  # 同一个X\nAttention(Q, K, V)\n```\n• **作用**：序列内部建模依赖\n• **场景**：Encoder、Decoder的第一层\n• **例子**："I love NLP" → 每个词关注其他词\n\n**Cross-Attention（交叉注意力）**：\n```python\n# Q来自目标，K、V来自源\nQ = Decoder_X @ W_Q  # 来自目标序列\nK = Encoder_X @ W_K  # 来自源序列\nV = Encoder_X @ W_V  # 来自源序列\nAttention(Q, K, V)\n```\n• **作用**：两个序列之间建模依赖\n• **场景**：Decoder的第二层（Encoder-Decoder Attention）\n• **例子**：翻译中，目标语言关注源语言\n\n**具体例子（机器翻译）**：\n\n**输入**：\n• 源：\"I love NLP\" (Encoder处理)\n• 目标：\"我爱自然\" (Decoder生成)\n\n**Decoder的三层**：\n1. **Masked Self-Attention**：\n   - \"我\" 关注 \"我\"\n   - \"爱\" 关注 \"我\", \"爱\"\n   - 内部依赖\n\n2. **Cross-Attention**：\n   - \"我\" 关注 \"I\" (Q from \"我\", K/V from \"I love NLP\")\n   - \"爱\" 关注 \"love\"\n   - \"自然\" 关注 \"NLP\"\n   - **跨语言对齐**\n\n3. **FFN**：非线性变换\n\n**数学形式**：\n\n**Self-Attention**：\n```\nAttention(X, X, X)\n所有来自同一个X\n```\n\n**Cross-Attention**：\n```\nAttention(X_target, X_source, X_source)\nQ从目标，K/V从源\n```\n\n**参数量**：\n• 两者参数量相同（3个投影矩阵）\n• 选项C错误\n\n**Mask**：\n• Self-Attention：Decoder需要causal mask\n• Cross-Attention：通常只mask padding\n• 选项B不完全正确\n\n**计算复杂度**：\n• 都是O(n·m·d)，n和m是序列长度\n• 选项D错误\n\n**应用**：\n• **机器翻译**：源语言 → 目标语言\n• **图像描述**：图像特征 → 文本描述\n• **VQA**：图像+问题 → 答案\n• **多模态**：视觉 ↔ 语言\n\n**现代变体**：\n• **BERT**：只有Self-Attention（单模态）\n• **GPT**：只有Self-Attention（自回归）\n• **T5**：Self + Cross（Encoder-Decoder）\n• **CLIP**：两个模态分别Self，然后Cross\n\n答案是**A：Q、K、V来自不同序列**！'
    },
    {
        id: 32,
        type: '多选',
        topic: 'Transformer进阶',
        difficulty: '挑战',
        question: '以下哪些是Transformer的有效优化技术？（多选）',
        options: [
            'A. Mixed Precision Training (FP16/BF16)',
            'B. Gradient Accumulation',
            'C. Gradient Checkpointing',
            'D. Dynamic Padding'
        ],
        correct: [0, 1, 2, 3],
        explanation: '**Transformer训练优化技术（全选！）**：\n\n**A. Mixed Precision Training ✓**\n\n**原理**：\n• 用FP16（半精度）代替FP32（全精度）\n• 关键操作（如loss）保持FP32\n\n**优势**：\n• **速度**：2-3倍训练加速\n• **内存**：减半内存占用（16bit vs 32bit）\n• **吞吐**：可用更大batch size\n\n**实现**：\n```python\nfrom torch.cuda.amp import autocast, GradScaler\nscaler = GradScaler()\n\nwith autocast():\n    output = model(input)\n    loss = criterion(output, target)\n\nscaler.scale(loss).backward()\nscaler.step(optimizer)\nscaler.update()\n```\n\n**注意**：\n• 需要Loss Scaling防止underflow\n• BF16（Brain Float16）更稳定，无需scaling\n\n---\n\n**B. Gradient Accumulation ✓**\n\n**问题**：GPU内存不够，batch size太小\n\n**解决**：\n```python\naccumulation_steps = 4\nfor i, (input, target) in enumerate(dataloader):\n    output = model(input)\n    loss = criterion(output, target) / accumulation_steps\n    loss.backward()  # 累积梯度\n    \n    if (i + 1) % accumulation_steps == 0:\n        optimizer.step()  # 更新参数\n        optimizer.zero_grad()  # 清空梯度\n```\n\n**效果**：\n• 等效大batch训练\n• batch_size=8 × 4 steps = 等效32\n• 内存只需要8的大小\n\n---\n\n**C. Gradient Checkpointing ✓**\n\n**问题**：前向传播需要保存激活值供反向用，内存爆炸\n\n**解决**：\n• **不保存**所有激活值\n• 反向传播时**重新计算**\n• Trade-off：用时间换空间\n\n**实现**：\n```python\nfrom torch.utils.checkpoint import checkpoint\n\nclass TransformerLayer(nn.Module):\n    def forward(self, x):\n        # 使用checkpoint包装\n        x = checkpoint(self.attention, x)\n        x = checkpoint(self.ffn, x)\n        return x\n```\n\n**效果**：\n• 内存减少50-70%\n• 训练时间增加20-30%\n• 可以训练更大模型或更长序列\n\n---\n\n**D. Dynamic Padding ✓**\n\n**问题**：\n• 固定长度padding：短句浪费计算\n• Batch内序列长度不一致\n\n**解决**：\n```python\n# 按长度排序\nsamples.sort(key=lambda x: len(x))\n\n# Batch内使用最长句的长度padding\nfor batch in batches:\n    max_len = max(len(s) for s in batch)\n    # 只pad到max_len，不是全局max\n    padded = pad_sequence(batch, max_len)\n```\n\n**优势**：\n• 减少无效计算（padding位置）\n• 加速10-30%\n• 内存节省\n\n**变体**：\n• **Bucketing**：相似长度的放一起\n• **Pack Sequences**：多个短句拼成长句\n\n---\n\n**其他优化技术**：\n\n**E. Flash Attention**：\n• 减少HBM访问\n• 2-4倍加速\n\n**F. Fused Kernels**：\n• LayerNorm + Dropout融合\n• 减少kernel launch开销\n\n**G. ZeRO Optimizer**：\n• 分布式训练优化\n• 优化器状态分片\n\n**H. Pipeline Parallelism**：\n• 模型分层到多GPU\n• 流水线并行\n\n**综合使用**：\n```python\n# 现代训练配置\n- Mixed Precision (BF16)\n- Gradient Accumulation (4 steps)\n- Gradient Checkpointing (内存<16GB)\n- Dynamic Padding\n- Flash Attention\n= 可在单个A100训练大模型！\n```\n\n答案是**ABCD全选**！这些都是必备技术！'
    },
    {
        id: 33,
        type: '选择',
        topic: 'Transformer进阶',
        difficulty: '挑战',
        question: '在Transformer中，为什么要在Softmax之前除以√d_k？如果不除会怎样？',
        options: [
            'A. 让计算更快',
            'B. 点积值可能很大，导致softmax梯度接近0（梯度消失）',
            'C. 为了归一化',
            'D. 数学推导要求'
        ],
        correct: 1,
        explanation: '**Scaling的数学原理**：\n\n**问题引入**：\n假设Q和K的每个元素是独立同分布，均值0，方差1\n\n**点积的方差**：\n```\nQ·K = Σ(q_i × k_i)  (i=1 to d_k)\n\n每一项：E[q_i×k_i] = 0, Var[q_i×k_i] = 1\n点积：Var[Q·K] = Σ Var[q_i×k_i] = d_k\n```\n• 点积的方差是d_k\n• d_k越大，点积值越分散\n\n**不除以√d_k的后果**：\n\n**1. Softmax饱和**：\n```python\n# 假设d_k=64，点积可能很大\nscores = [50, 48, 2, 1]  # 数值范围大\nsoftmax([50, 48, 2, 1]) ≈ [0.88, 0.12, 0.0, 0.0]\n# 几乎变成one-hot！\n```\n\n**2. 梯度消失**：\n```\nsoftmax的导数：p_i(1-p_i)\n\n当p_i接近1或0时：\np_i(1-p_i) ≈ 0\n梯度消失！\n```\n\n**3. 训练不稳定**：\n• 极端的attention权重\n• 模型过度依赖少数位置\n• 泛化能力差\n\n**除以√d_k之后**：\n```python\nscores = scores / sqrt(d_k)\nVar[scores] = d_k / d_k = 1\n# 方差归一化到1\n\nscores = [6.25, 6.0, 0.25, 0.125]  # 数值温和\nsoftmax(scores) ≈ [0.52, 0.40, 0.05, 0.03]\n# 分布更平滑！\n```\n\n**数学直觉**：\n• **不缩放**：d_k=64时，点积~N(0, 64)，范围很大\n• **缩放后**：点积/√64 ~ N(0, 1)，范围可控\n\n**实验验证**：\n\n**d_k=64，不缩放**：\n```\nAttention entropy: 0.3  (非常低，接近确定)\nGradient norm: 0.001   (梯度消失)\nTraining: 不收敛\n```\n\n**d_k=64，缩放**：\n```\nAttention entropy: 2.5  (分布合理)\nGradient norm: 0.1     (健康)\nTraining: 正常收敛\n```\n\n**对比其他方法**：\n\n**不缩放**：\n• Additive Attention (Bahdanau)：scores = V^T tanh(W[Q;K])\n• 使用tanh限制范围\n• 但计算复杂\n\n**Transformer的√d_k**：\n• 简单优雅\n• 数学上合理\n• 计算高效\n\n**温度参数**：\n有些工作使用可学习的温度T：\n```python\nscores = scores / (sqrt(d_k) * T)\n```\n更灵活，但通常√d_k够用\n\n**代码示例**：\n```python\n# 错误：不缩放\nscores = torch.matmul(Q, K.transpose(-1, -2))\nattn = F.softmax(scores, dim=-1)  # 梯度消失！\n\n# 正确：缩放\nscores = torch.matmul(Q, K.transpose(-1, -2)) / math.sqrt(d_k)\nattn = F.softmax(scores, dim=-1)  # 健康梯度\n```\n\n**结论**：√d_k缩放是Transformer稳定训练的关键，防止softmax饱和导致梯度消失！\n\n答案是**B**！'
    },
    {
        id: 34,
        type: '选择',
        topic: 'Transformer进阶',
        difficulty: '挑战',
        question: 'Beam Search在Transformer解码时的作用是什么？',
        options: [
            'A. 加速推理',
            'B. 保留多个候选序列，找到更好的输出',
            'C. 减少内存占用',
            'D. 防止过拟合'
        ],
        correct: 1,
        explanation: '**Beam Search深度解析**：\n\n**问题背景**：\n自回归生成需要选择每一步的token\n\n**Greedy Decoding（贪心）**：\n```python\n每步选择概率最高的token\n\nStep 1: P(I)=0.8, P(The)=0.2 → 选"I"\nStep 2: P(love)=0.7, P(like)=0.3 → 选"love"\n结果："I love you"\n\n问题：局部最优 ≠ 全局最优\n可能错过："The cat sat"（整体概率更高）\n```\n\n**Beam Search**：\n```python\n保留top-k个候选（beam width=k）\n\nBeam=2的例子：\n\nStep 1:\n  [BOS] → I (0.8)     ← beam 1\n  [BOS] → The (0.2)   ← beam 2\n\nStep 2:\n  I → love (0.8×0.7=0.56)    ← beam 1\n  I → like (0.8×0.3=0.24)    \n  The → cat (0.2×0.9=0.18)   ← beam 2\n  The → dog (0.2×0.1=0.02)   丢弃\n\nStep 3:\n  继续扩展top-2...\n\n最终选择总概率最高的序列\n```\n\n**关键参数**：\n\n**Beam Width (k)**：\n• k=1：贪心搜索\n• k=5-10：常用值\n• k=50：高质量但慢\n• k→∞：理论上找到全局最优（不现实）\n\n**Length Penalty**：\n```python\nscore = log P(y) / length^α\n```\n• α=0：无惩罚，偏向短句\n• α=0.6-1.0：平衡长短\n• α>1：偏向长句\n\n**优势**：\n1. **更好的输出**：考虑多个路径\n2. **减少错误**：不会因为一步错误完全偏离\n3. **质量提升**：BLEU分数+2-5分\n\n**劣势**：\n1. **速度慢**：k倍计算量\n2. **内存增加**：需要保存k个候选\n3. **不保证全局最优**：仍然是启发式搜索\n\n**变体**：\n\n**Diverse Beam Search**：\n• 惩罚相似候选\n• 增加多样性\n\n**Constrained Beam Search**：\n• 强制包含特定词\n• 用于受控生成\n\n**Top-k/Top-p Sampling**：\n• 随机采样而非确定\n• 更有创造性\n• GPT系列常用\n\n**实际应用**：\n\n**机器翻译**：\n• Beam=5-10\n• 显著提升BLEU\n\n**摘要生成**：\n• Beam=4-8\n• 平衡质量和多样性\n\n**对话生成**：\n• 较小beam或sampling\n• 避免枯燥回复\n\n**代码示例**：\n```python\ndef beam_search(model, src, beam_width=5, max_len=100):\n    # 初始化beam\n    beams = [(torch.tensor([BOS]), 0.0)]  # (sequence, score)\n    \n    for _ in range(max_len):\n        candidates = []\n        for seq, score in beams:\n            if seq[-1] == EOS:\n                candidates.append((seq, score))\n                continue\n                \n            # 模型预测\n            probs = model(src, seq)\n            top_k = probs.topk(beam_width)\n            \n            # 扩展beam\n            for prob, token in zip(top_k.values, top_k.indices):\n                new_seq = torch.cat([seq, token])\n                new_score = score + math.log(prob)\n                candidates.append((new_seq, new_score))\n        \n        # 保留top-k\n        beams = sorted(candidates, key=lambda x: x[1], reverse=True)[:beam_width]\n    \n    return beams[0][0]  # 返回最佳序列\n```\n\n**何时使用**：\n• 质量要求高：用Beam Search\n• 速度要求高：用Greedy\n• 创造性要求高：用Sampling\n\n答案是**B：保留多个候选，找到更好的输出**！'
    },
    {
        id: 35,
        type: '选择',
        topic: 'Transformer进阶',
        difficulty: '挑战',
        question: 'Transformer的参数初始化为什么重要？以下哪种初始化最合适？',
        options: [
            'A. 全部初始化为0',
            'B. 全部初始化为小随机值',
            'C. Xavier/Glorot初始化',
            'D. 全部初始化为1'
        ],
        correct: 2,
        explanation: '**参数初始化的重要性**：\n\n**为什么初始化重要**：\n1. **影响训练速度**：好的初始化快速收敛\n2. **影响最终效果**：差的初始化可能陷入局部最优\n3. **影响稳定性**：防止梯度爆炸/消失\n\n**错误初始化的后果**：\n\n**全0初始化（选项A）**：\n```python\n所有权重=0\n→ 所有神经元输出相同\n→ 梯度相同\n→ 对称性问题\n→ 无法学习！\n```\n\n**全1初始化（选项D）**：\n```python\n所有权重=1\n→ 激活值爆炸\n→ 梯度爆炸\n→ NaN loss\n```\n\n**小随机值（选项B）**：\n```python\nW ~ U(-0.01, 0.01)\n→ 可能太小，信号衰减\n→ 或太大，梯度爆炸\n→ 不稳定\n```\n\n**Xavier/Glorot初始化（选项C ✓）**：\n\n**原理**：\n保持前向和反向传播时的方差稳定\n\n**公式**：\n```python\n# Xavier Uniform\nW ~ U(-sqrt(6/(fan_in + fan_out)), \n       sqrt(6/(fan_in + fan_out)))\n\n# Xavier Normal  \nW ~ N(0, 2/(fan_in + fan_out))\n```\n\n**fan_in/fan_out**：\n• fan_in：输入维度\n• fan_out：输出维度\n\n**为什么有效**：\n```\nVar[output] = fan_in × Var[W] × Var[input]\n\n如果Var[W] = 1/fan_in：\nVar[output] = Var[input]\n→ 方差稳定传播！\n```\n\n**Transformer各层初始化**：\n\n**1. Embedding层**：\n```python\nnn.Embedding.weight ~ N(0, 0.02)\n# 或用预训练embedding\n```\n\n**2. Linear层（Attention, FFN）**：\n```python\ntorch.nn.init.xavier_uniform_(linear.weight)\ntorch.nn.init.zeros_(linear.bias)\n```\n\n**3. LayerNorm**：\n```python\ngamma初始化为1\nbeta初始化为0\n```\n\n**现代变体**：\n\n**Kaiming/He初始化**：\n```python\n# 适合ReLU激活\nW ~ N(0, 2/fan_in)\n```\n\n**GPT-2/3初始化**：\n```python\n# 残差层需要缩放\nW_residual = W_xavier / sqrt(2*num_layers)\n# 防止深层网络方差爆炸\n```\n\n**T5/BERT初始化**：\n```python\n# 标准差与模型维度相关\nstd = 1 / sqrt(d_model)\n```\n\n**实验对比**：\n\n**全0**：不收敛\n**全1**：NaN loss\n**小随机U(-0.01,0.01)**：收敛慢，效果差\n**Xavier**：正常收敛，BLEU 27.3\n**Xavier + 残差缩放**：更稳定，BLEU 27.8\n\n**代码示例**：\n```python\ndef init_weights(module):\n    if isinstance(module, nn.Linear):\n        torch.nn.init.xavier_uniform_(module.weight)\n        if module.bias is not None:\n            torch.nn.init.zeros_(module.bias)\n    elif isinstance(module, nn.Embedding):\n        torch.nn.init.normal_(module.weight, mean=0, std=0.02)\n    elif isinstance(module, nn.LayerNorm):\n        module.bias.data.zero_()\n        module.weight.data.fill_(1.0)\n\ntransformer.apply(init_weights)\n```\n\n**最佳实践**：\n1. **Linear层**：Xavier/Glorot\n2. **Embedding**：小方差正态N(0, 0.02)\n3. **LayerNorm**：γ=1, β=0\n4. **深层模型**：残差路径需要缩放\n5. **使用Pre-LN**：对初始化更鲁棒\n\n**工具支持**：\n```python\n# PyTorch默认初始化通常就是Xavier\ntransformer = nn.Transformer()  # 自动Xavier初始化\n```\n\n答案是**C：Xavier/Glorot初始化**！\n\n好的初始化是成功训练的第一步！'
    },
    {
        id: 36,
        type: '选择',
        topic: 'Transformer进阶',
        difficulty: '挑战',
        question: 'Transformer在推理时可以使用KV Cache优化，这是什么原理？',
        options: [
            'A. 缓存之前计算的Key和Value，避免重复计算',
            'B. 缓存attention权重',
            'C. 缓存模型参数',
            'D. 缓存输入数据'
        ],
        correct: 0,
        explanation: '**KV Cache优化原理**：\n\n**自回归生成的问题**：\n```python\n# 生成过程\nStep 1: [BOS] → predict "I"\nStep 2: [BOS, I] → predict "love"\nStep 3: [BOS, I, love] → predict "you"\n\n每一步都要重新计算所有历史token的K和V！\n浪费！\n```\n\n**没有KV Cache**：\n```python\n# Step 3计算\ninput = [BOS, I, love]  # length=3\n\n# 计算所有位置的K,V\nK = input @ W_K  # [3, d_k]\nV = input @ W_V  # [3, d_k]\n\n# Query只需要最后一个位置\nQ = input[-1] @ W_Q  # [1, d_k]\n\n# Attention\nattn = softmax(Q @ K.T) @ V\n\n问题：每次都重新算K和V，前面的token已经算过了！\n```\n\n**使用KV Cache**：\n```python\n# 初始化cache\nK_cache = []\nV_cache = []\n\n# Step 1\nK_new = token_BOS @ W_K\nV_new = token_BOS @ W_V\nK_cache.append(K_new)\nV_cache.append(V_new)\n\n# Step 2  \nK_new = token_I @ W_K      # 只算新token\nV_new = token_I @ W_V\nK_cache.append(K_new)      # 添加到cache\nV_cache.append(V_new)\n\n# Step 3\nK_new = token_love @ W_K   # 只算新token\nV_new = token_love @ W_V\nK_cache.append(K_new)\nV_cache.append(V_new)\n\n# Attention计算\nQ = token_love @ W_Q\nK_all = torch.cat(K_cache)  # 从cache取\nV_all = torch.cat(V_cache)\nattn = softmax(Q @ K_all.T) @ V_all\n\n优化：旧token的K,V不再重复计算！\n```\n\n**加速效果**：\n\n**计算量对比**：\n• 无cache：每步计算t个token的K,V → O(t²)\n• 有cache：每步只算1个token的K,V → O(t)\n• **加速：5-10倍**（长序列更明显）\n\n**内存占用**：\n```python\n# Cache大小\nper_token = 2 × num_layers × num_heads × d_k × 2_bytes(FP16)\n\n# GPT-3 (96层, 96头, d_k=128)\nper_token = 2 × 96 × 96 × 128 × 2 ≈ 4.7MB\n\n生成1024 tokens:\nCache ≈ 4.7MB × 1024 ≈ 4.8GB\n\n内存换速度！\n```\n\n**实现细节**：\n\n**1. 注意力mask**：\n```python\n# 只需要最后一行的mask\nmask = mask[-1, :]  # [1, seq_len]\n```\n\n**2. 位置编码**：\n```python\n# 需要正确的位置编码\npos_id = len(K_cache)  # 当前位置\npos_emb = PositionalEncoding(pos_id)\n```\n\n**3. 多层处理**：\n```python\n# 每层都有独立的KV cache\nfor layer in transformer.layers:\n    K_cache_layer, V_cache_layer = layer.kv_cache\n    ...\n```\n\n**应用场景**：\n\n**1. 对话系统**：\n• 长对话历史\n• 显著加速\n\n**2. 长文本生成**：\n• 文章、故事生成\n• 必需优化\n\n**3. Code生成**：\n• Copilot类应用\n• 实时响应\n\n**局限性**：\n\n**1. 内存占用大**：\n• 长序列需要大量内存\n• Batch推理困难\n\n**2. 只适用于解码**：\n• Encoder不能用（需要双向attention）\n• Decoder的Cross-Attention可以cache\n\n**3. 静态图优化困难**：\n• 序列长度动态变化\n• JIT编译困难\n\n**代码示例**：\n```python\nclass TransformerWithCache(nn.Module):\n    def forward(self, x, kv_cache=None, use_cache=False):\n        if use_cache and kv_cache is not None:\n            # 只计算新token\n            K_new = x @ self.W_K\n            V_new = x @ self.W_V\n            \n            # 拼接cache\n            K = torch.cat([kv_cache[\'K\'], K_new], dim=1)\n            V = torch.cat([kv_cache[\'V\'], V_new], dim=1)\n            \n            # 更新cache\n            kv_cache = {\'K\': K, \'V\': V}\n        else:\n            # 正常计算\n            K = x @ self.W_K\n            V = x @ self.W_V\n            kv_cache = {\'K\': K, \'V\': V}\n        \n        Q = x[:, -1:] @ self.W_Q  # 只需要最后一个\n        attn = softmax(Q @ K.transpose(-1, -2)) @ V\n        \n        return attn, kv_cache\n```\n\n**实际效果**：\n```\n无KV Cache:\n  生成100 tokens: 10.0秒\n  内存: 2GB\n\n有KV Cache:\n  生成100 tokens: 1.5秒  (6.7x faster!)\n  内存: 6GB  (trade-off)\n```\n\n**现代实现**：\n• HuggingFace Transformers：默认支持\n• vLLM：高度优化的KV Cache\n• FasterTransformer：NVIDIA的优化库\n\n答案是**A：缓存Key和Value，避免重复计算**！\n\nKV Cache是生产环境部署Transformer的关键优化！'
    },
    {
        id: 37,
        type: '选择',
        topic: 'Transformer进阶',
        difficulty: '挑战',
        question: '关于Transformer的可解释性，Attention权重可以直接解释模型的决策吗？',
        options: [
            'A. 可以，attention权重直接反映了重要性',
            'B. 不能，attention权重不一定反映因果关系',
            'C. 只有单层模型可以',
            'D. 只有最后一层可以'
        ],
        correct: 1,
        explanation: '**Attention可解释性的误区**：\n\n**常见假设（错误）**：\n> "高attention权重 = 该位置重要"\n\n**为什么这是错的**：\n\n**1. Attention ≠ 重要性**\n\n**反例1：Uniform Attention也能工作**：\n```python\n# 实验：强制uniform attention\nattn = torch.ones(seq_len, seq_len) / seq_len\noutput = attn @ V\n\n结果：性能下降<5%\n说明：大部分信息在Value中，不在权重中！\n```\n\n**反例2：随机置换Attention**：\n```python\n# 打乱某些层的attention权重\nattn_shuffled = attn[torch.randperm(seq_len)]\n\n结果：某些层打乱后性能几乎不变\n说明：这些层的attention不重要！\n```\n\n**2. 多层复杂性**\n\n**信息流动**：\n```python\nLayer 1: Token A attends to B (weight=0.8)\nLayer 2: Token B attends to C (weight=0.9)\n...\nLayer 12: Final decision\n\n问题：\n- 最终A的影响来自多层累积\n- 单层attention看不出来\n- 需要追踪整个计算图\n```\n\n**3. Attention作为"搬运工"**\n\n**实验发现**：\n```python\nAttention主要作用：\n- 把相关信息聚合到一起\n- 真正的"决策"在FFN层\n- FFN层参数占2/3，更重要！\n\nattn_output = attention(Q, K, V)  # 聚合信息\nfinal = FFN(attn_output)           # 真正处理\n```\n\n**4. Value矩阵更重要**\n\n**数学上**：\n```python\noutput = softmax(QK^T/√d) @ V\n         ^^^^^^^^^^^^^^^^   ^\n         attention weights   Value\n\n即使attention=uniform，只要V学得好，\n模型依然能工作！\n```\n\n**正确的可解释性方法**：\n\n**1. Attention Flow**：\n• 追踪多层的attention传播\n• 论文：Attention Flows (2020)\n\n**2. Integrated Gradients**：\n• 基于梯度的归因方法\n• 更可靠\n\n**3. Attention Rollout**：\n```python\n# 累积多层attention\nA_total = I  # 单位矩阵\nfor layer in layers:\n    A_total = A_total @ layer.attention\n# A_total 才是真正的attention\n```\n\n**4. Probing Classifiers**：\n• 训练线性探针\n• 测试隐藏层包含什么信息\n\n**5. Adversarial Tests**：\n• 扰动attention\n• 看哪些真正重要\n\n**实验证据**：\n\n**Jain & Wallace (2019)**：\n> "Attention is not Explanation"\n> 发现attention与其他归因方法相关性低\n\n**Serrano & Smith (2019)**：\n> "Is Attention Interpretable?"\n> 随机删除高权重token，性能影响小\n\n**Wiegreffe & Pinter (2019)**：\n> "Attention is not not Explanation"\n> 反驳：在某些任务上attention确实有用\n\n**结论**：**有一定参考价值，但不能完全信任**\n\n**实践建议**：\n\n**可以做**：\n✓ 可视化attention找pattern\n✓ 作为探索性分析的起点\n✓ 检查模型是否学到合理依赖\n\n**不能做**：\n✗ 直接用于医疗/法律等高风险决策\n✗ 声称"模型因为X所以预测Y"\n✗ 忽略其他层的影响\n\n**可视化例子**：\n```python\n# 看起来合理的attention\n"The cat sat on the mat"\n \nQuery="sat" attends to:\n- "cat" (0.6)   ← 主语\n- "on" (0.3)    ← 介词\n- "mat" (0.1)   ← 宾语\n\n这看起来捕捉了句法！\n\n但：\n1. 可能是巧合\n2. 可能其他层更重要\n3. 可能FFN才是关键\n```\n\n**更好的替代方案**：\n\n**LIME (Local Interpretable Model-agnostic Explanations)**：\n• 局部线性近似\n• 更可靠\n\n**SHAP (SHapley Additive exPlanations)**：\n• 博弈论归因\n• 理论保证\n\n**Counterfactual Analysis**：\n• "如果改变X，Y会如何变？"\n• 因果推理\n\n**总结**：\n\nAttention可视化：\n- ✓ 启发性\n- ✓ 美观\n- ✗ 不精确\n- ✗ 不充分\n- ✗ 可能误导\n\n要谨慎使用，结合多种方法！\n\n答案是**B：attention权重不一定反映因果关系**！\n\n可解释性是复杂的，不要被漂亮的attention图欺骗！'
    },
    {
        id: 38,
        type: '选择',
        topic: 'Transformer进阶',
        difficulty: '挑战',
        question: 'Transformer模型的参数量主要集中在哪里？',
        options: [
            'A. Embedding层',
            'B. Attention层',
            'C. Feed-Forward Network (FFN)层',
            'D. LayerNorm层'
        ],
        correct: 2,
        explanation: '**Transformer参数分布分析**：\n\n**以BERT-base为例（d_model=768, layers=12）**：\n\n**1. Embedding层**：\n```python\nToken Embedding: vocab_size × d_model\n              = 30,000 × 768\n              = 23M parameters\n\nPosition Embedding: max_len × d_model  \n                 = 512 × 768\n                 = 0.4M parameters\n\nSegment Embedding: 2 × d_model\n                = 2 × 768\n                = 0.001M parameters\n\n总计：≈23M (21% of total)\n```\n\n**2. 每层Transformer**：\n\n**Attention层（每层）**：\n```python\nQ: d_model × d_model = 768 × 768 = 0.59M\nK: d_model × d_model = 768 × 768 = 0.59M  \nV: d_model × d_model = 768 × 768 = 0.59M\nO: d_model × d_model = 768 × 768 = 0.59M\n\n每层Attention: 4 × 0.59M = 2.36M\n12层: 12 × 2.36M = 28.3M (26% of total)\n```\n\n**FFN层（每层）**：\n```python\nFC1: d_model × d_ff = 768 × 3072 = 2.36M\nFC2: d_ff × d_model = 3072 × 768 = 2.36M\n\n每层FFN: 2.36M + 2.36M = 4.72M  \n12层: 12 × 4.72M = 56.6M (51% of total!!)\n```\n\n**LayerNorm层（每层）**：\n```python\n每个LayerNorm: 2 × d_model = 2 × 768 = 0.001M\n每层2个LN，12层: 24 × 0.001M = 0.02M (<1%)\n```\n\n**总结（BERT-base）**：\n```\n总参数: ≈110M\n\n分布：\n- Embedding:  23M  (21%)\n- Attention:  28M  (26%)\n- FFN:        57M  (52%)  ← 最多！\n- LayerNorm:  <1M (<1%)\n```\n\n**为什么FFN占这么多？**：\n\n**1. 维度扩展**：\n```python\nd_ff = 4 × d_model\n\nAttention: 4 × d_model²\nFFN: 2 × d_model × (4×d_model) = 8 × d_model²\n\nFFN参数是Attention的2倍！\n```\n\n**2. 每层都有**：\n```python\n每层：\n- Multi-Head Attention: 4 × d_model²\n- FFN: 8 × d_model²\n\n每层FFN占67%\n```\n\n**不同模型的对比**：\n\n**GPT-2 (large)**：\n```\n总参数: 774M\n\n- Embedding: 51M  (7%)\n- Attention: 218M (28%)\n- FFN:      505M  (65%)  ← 占大头！\n```\n\n**GPT-3 (175B)**：\n```\n估算:\n- Embedding: ~10B  (6%)\n- Attention: ~50B  (29%)\n- FFN:      ~115B  (65%)  ← 占大头！\n```\n\n**LLaMA-7B**：\n```\n- Embedding: ~0.3B (4%)\n- Attention: ~2.1B (30%)\n- FFN:      ~4.6B  (66%)  ← 占大头！\n\n趋势一致！\n```\n\n**为什么FFN这么重要？**：\n\n**1. 表达能力**：\n• Attention：聚合信息\n• FFN：处理和变换信息\n• FFN提供核心计算能力\n\n**2. 记忆存储**：\n• 有研究认为FFN存储事实知识\n• 类似"键值对"存储\n• Attention负责检索\n\n**3. 非线性变换**：\n• Attention本质是加权平均（线性）\n• FFN提供非线性（ReLU/GELU）\n• 增强模型表达力\n\n**优化思路**：\n\n**1. MoE (Mixture of Experts)**：\n```python\n# 不是所有token都用所有FFN\n# 每个token路由到少数expert\n稀疏激活，减少计算\n```\n\n**2. 低秩分解**：\n```python\nW_ff = U @ V\n# d_model × d_ff → d_model × r × r × d_ff\n# 减少参数\n```\n\n**3. 知识蒸馏**：\n• FFN可以有效压缩\n• 保留Attention结构\n\n**代码验证**：\n```python\ndef count_parameters(model):\n    for name, module in model.named_modules():\n        if isinstance(module, nn.Linear):\n            params = module.weight.numel()\n            if \'ffn\' in name or \'fc\' in name:\n                print(f"FFN {name}: {params/1e6:.2f}M")\n            elif \'attn\' in name:\n                print(f"Attention {name}: {params/1e6:.2f}M")\n\n# 运行会发现FFN远多于Attention！\n```\n\n**结论**：\n\nFFN层占参数的50-65%！\n\n选项C正确：**Feed-Forward Network层**！\n\n这也是为什么现代研究大量关注优化FFN的原因！'
    },
    {
        id: 39,
        type: '多选',
        topic: 'Transformer进阶',
        difficulty: '挑战',
        question: 'Transformer的训练技巧有哪些？（多选）',
        options: [
            'A. Learning Rate Warmup',
            'B. Gradient Accumulation',
            'C. Mixed Precision Training',
            'D. Cyclic Learning Rate'
        ],
        correct: [0, 1, 2],
        explanation: '**Transformer训练技巧详解**：\n\n**A. Learning Rate Warmup ✓**\n\n**问题**：\n• 训练初期参数随机\n• 大学习率→梯度爆炸\n• 模型不收敛\n\n**Warmup策略**：\n```python\n# 前warmup_steps步线性增长\nfor step in range(warmup_steps):\n    lr = base_lr * (step / warmup_steps)\n\n# 之后平方根衰减或cosine衰减\nlr = base_lr * sqrt(warmup_steps / step)\n```\n\n**原始Transformer公式**：\n```python\nlr = d_model^(-0.5) * min(\n    step^(-0.5), \n    step * warmup_steps^(-1.5)\n)\n```\n\n**效果**：\n• 训练稳定\n• 更好收敛\n• 必备技术\n\n---\n\n**B. Gradient Accumulation ✓**\n\n**问题**：\n• GPU内存不足\n• Batch size太小\n• 训练不稳定\n\n**解决**：\n```python\naccumulation_steps = 4\noptimizer.zero_grad()\n\nfor i, batch in enumerate(dataloader):\n    loss = model(batch) / accumulation_steps\n    loss.backward()  # 累积梯度\n    \n    if (i + 1) % accumulation_steps == 0:\n        optimizer.step()  # 更新\n        optimizer.zero_grad()\n```\n\n**效果**：\n• 等效大batch\n• batch=8 × 4步 = 等效32\n• 内存只需8的大小\n\n---\n\n**C. Mixed Precision Training ✓**\n\n**原理**：\n• FP16代替FP32\n• 关键操作保持FP32\n• Loss Scaling防underflow\n\n**PyTorch实现**：\n```python\nfrom torch.cuda.amp import autocast, GradScaler\n\nscaler = GradScaler()\n\nfor batch in dataloader:\n    with autocast():  # FP16\n        output = model(batch)\n        loss = criterion(output, target)\n    \n    scaler.scale(loss).backward()\n    scaler.step(optimizer)\n    scaler.update()\n```\n\n**效果**：\n• 2-3倍加速\n• 内存减半\n• 几乎无精度损失\n\n---\n\n**D. Cyclic Learning Rate ✗**\n\n**为什么不常用**：\n\n**Cyclic LR策略**：\n```python\n# 学习率周期性变化\nlr在[min_lr, max_lr]之间循环\n```\n\n**问题**：\n1. **Transformer对LR敏感**：\n   • 大LR可能破坏已学到的知识\n   • 不适合周期性变化\n\n2. **Warmup更重要**：\n   • Transformer需要平稳启动\n   • Cyclic在初期不稳定\n\n3. **实验证据**：\n   • BERT/GPT都不用Cyclic\n   • Warmup + 衰减更有效\n\n4. **适用场景**：\n   • CV任务（ResNet等）\n   • 不太适合NLP的Transformer\n\n**更常用的LR Schedule**：\n\n**Cosine Annealing**：\n```python\nlr = min_lr + 0.5 * (max_lr - min_lr) * \n     (1 + cos(π * step / total_steps))\n```\n• 平滑衰减\n• 比Cyclic稳定\n\n**Linear Decay**：\n```python\nlr = max_lr * (1 - step / total_steps)\n```\n• 简单有效\n• BERT使用\n\n**Inverse Square Root**：\n```python\nlr = base_lr / sqrt(max(step, warmup_steps))\n```\n• 原始Transformer使用\n\n---\n\n**其他重要技巧**：\n\n**E. Gradient Clipping**：\n```python\ntorch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)\n```\n• 防梯度爆炸\n• 必备\n\n**F. Label Smoothing**：\n```python\nloss = (1-ε) * CE_loss + ε * uniform\n```\n• 防过度自信\n• 提升泛化\n\n**G. Dropout**：\n```python\ndropout=0.1  # BERT标准\n```\n• Attention后\n• FFN后\n• Embedding后\n\n**H. Weight Decay**：\n```python\noptimizer = AdamW(params, weight_decay=0.01)\n```\n• L2正则\n• 防过拟合\n\n**I. Early Stopping**：\n• 监控验证集\n• 防过拟合\n\n---\n\n**最佳实践组合**：\n```python\n# 现代Transformer训练配置\noptimizer = AdamW(\n    model.parameters(),\n    lr=5e-5,\n    weight_decay=0.01,\n    betas=(0.9, 0.999),\n    eps=1e-8\n)\n\nscheduler = get_linear_schedule_with_warmup(\n    optimizer,\n    num_warmup_steps=10000,\n    num_training_steps=100000\n)\n\nscaler = GradScaler()  # Mixed Precision\n\nclip_grad_norm = 1.0   # Gradient Clipping\naccumulation_steps = 4  # Gradient Accumulation\nlabel_smoothing = 0.1  # Label Smoothing\n```\n\n---\n\n**总结**：\n\n**必备（Always）**：\n✓ Warmup\n✓ Gradient Accumulation（内存不足时）\n✓ Mixed Precision（几乎总是）\n✓ Gradient Clipping\n\n**推荐**：\n✓ Label Smoothing\n✓ Weight Decay\n✓ Dropout\n\n**不推荐（for Transformer）**：\n✗ Cyclic Learning Rate\n✗ SGD with Momentum（用Adam系列）\n\n**答案是ABC**！\n\nCyclic LR虽然是个好技术，但不适合Transformer！'
    },
    {
        id: 40,
        type: '选择',
        topic: 'Transformer进阶',
        difficulty: '挑战',
        question: 'Transformer相比CNN在处理序列数据时的优势是什么？',
        options: [
            'A. 参数量更少',
            'B. 可以建模任意长距离依赖，感受野无限',
            'C. 训练速度更快',
            'D. 推理速度更快'
        ],
        correct: 1,
        explanation: '**Transformer vs CNN for Sequence**：\n\n**感受野对比**：\n\n**CNN**：\n```python\n# 1D CNN for sequence\nkernel_size = 3\n\nLayer 1: 感受野 = 3\nLayer 2: 感受野 = 5  (3 + 2)\nLayer 3: 感受野 = 7  (5 + 2)\n...\nLayer n: 感受野 = 2n + 1\n\n要覆盖长度L的序列：\n需要 L/2 层！\n```\n\n**Transformer**：\n```python\n# Self-Attention\nLayer 1: 感受野 = L (全局！)\n\n任意两个位置直接连接\n路径长度 = O(1)\n```\n\n**长距离依赖建模**：\n\n**例子**：理解"The keys are on the table"\n```\nCNN:\n  Layer 1: "The" 看到 "keys"\n  Layer 2: "The" 看到 "are"\n  Layer 3: "The" 看到 "on"\n  Layer 4: "The" 看到 "the"\n  Layer 5: "The" 看到 "table"\n  需要5层！\n\nTransformer:\n  Layer 1: "The" 直接看到所有词\n  包括 "table"\n  只需1层！\n```\n\n**参数量对比（选项A ✗）**：\n\n**CNN**:\n```python\n# 1D CNN\nConv1D(d_in, d_out, kernel_size=3)\n参数: 3 × d_in × d_out\n\n多层CNN:\n总参数: O(L × d²)  # L是层数\n```\n\n**Transformer**:\n```python\nAttention: 4 × d_model²  (Q,K,V,O)\nFFN: 8 × d_model²\n\n每层: 12 × d_model²\n多层: O(N × d²)  # N是层数\n\n通常 N < L，但d通常很大\n结果：Transformer参数更多！\n```\n\n**训练速度（选项C ✗）**：\n\n**CNN**:\n```\n优点: 卷积可高度优化（cuDNN）\n缺点: 需要很多层达到全局感受野\n```\n\n**Transformer**:\n```\n优点: 所有位置并行\n缺点: Attention复杂度O(n²)\n\n短序列(<512): Transformer更快\n长序列(>2048): CNN可能更快\n```\n\n**推理速度（选项D ✗）**：\n\n**CNN**:\n```\n编码: 快，一次前向\n解码: 每步O(L)，L是卷积层数\n```\n\n**Transformer**:\n```\n编码: 快，并行\n解码: 每步O(n²)，n是序列长度\n      需要KV Cache优化\n\n总体: CNN推理通常更快\n```\n\n**正确答案（B）详解**：\n\n**无限感受野的优势**：\n\n**1. 理解长依赖**：\n```\n"Although I have been studying French for years, \nI still cannot speak it fluently."\n\n"I" 和 "fluently" 相隔很远\n- CNN需要堆叠很多层\n- Transformer一层直接连接\n```\n\n**2. 捕捉全局模式**：\n```\n文档级理解\n跨句推理\n远距离共指消解\n```\n\n**3. 位置不变性**：\n```\n无论两个词距离多远\nAttention权重都能直接计算\n不需要信息逐层传递\n```\n\n**实验证据**：\n\n**论文: "Do You Need Attention for Sequence Labeling?"**\n• 短距离任务(<10词): CNN够用\n• 长距离任务(>20词): Transformer显著更好\n\n**为什么CNN在CV很好，Sequence不行？**：\n\n**图像**:\n• 局部性强（相邻像素相关）\n• 平移不变性\n• CNN的归纳偏置完美匹配\n\n**序列（NLP）**:\n• 长距离依赖常见\n• 语法结构复杂\n• 需要全局建模\n• Transformer更合适\n\n**混合架构**：\n\n**Conformer（语音）**:\n```python\nConv + Self-Attention\n- Conv提取局部特征\n- Attention建模长依赖\n结合两者优势\n```\n\n**PerceiverIO**:\n```python\n- 局部处理用CNN\n- 全局整合用Attention\n```\n\n**总结对比**：\n\n| 方面 | CNN | Transformer |\n|------|-----|-------------|\n| 感受野 | 局部,渐进扩展 | **全局,O(1)** |\n| 长距离 | 困难 | **轻松** |\n| 参数量 | **少** | 多 |\n| 训练速度 | 中等 | 中等 |\n| 推理速度 | **快** | 慢(需优化) |\n| 归纳偏置 | 强(局部) | 弱(需数据) |\n| 可解释性 | 难 | **较容易** |\n\n**答案是B：无限感受野，任意长距离依赖**！\n\n这是Transformer在NLP领域碾压CNN的核心原因！'
    },
    {
        id: 101,
        type: '代码',
        topic: '手撕Transformer',
        difficulty: '进阶',
        order: 1,
        question: '【Step 1/14】导入必要的库：',
        code: `# 导入库
import [blank]  # 核心张量库
import torch.nn as [blank]  # 神经网络层
import torch.nn.functional as [blank]  # 激活函数
import [blank]  # 数学运算
import [blank] as np  # 数组处理`,
        answers: ['torch', 'nn', 'F', 'math', 'numpy'],
        acceptedAnswers: [
            ['torch'],
            ['nn'],
            ['F'],
            ['math'],
            ['numpy', 'np']
        ],
        explanation: '构建Transformer需要: torch(核心), nn(层), F(函数), math(数学), numpy(数组)'
    },    {
        id: 102,
        type: '提示',
        topic: '手撕Transformer',
        difficulty: '进阶',
        order: 2,
        question: '【Step 2/14】Transformer代码架构说明',
        content: `**📋 构建顺序：**

**基础层**
1. TokenEmbedding - 词嵌入
2. PositionalEncoding - 位置编码

**注意力**
3. ScaledDotProductAttention - 点积注意力
4. MultiHeadAttention - 多头注意力

**前馈网络**
5. PositionwiseFeedForward - FFN

**编码/解码层**
6. EncoderLayer - 编码器层
7. DecoderLayer - 解码器层

**完整模型**
8. Encoder - 编码器
9. Decoder - 解码器
10. Transformer - 完整模型

接下来逐步实现！`,
        explanation: ''
    },
    {
        id: 103,
        type: '代码',
        topic: '手撕Transformer',
        difficulty: '进阶',
        order: 3,
        question: '【Step 3/14】Token Embedding - 将token ID转为向量：',
        code: `class TokenEmbedding(nn.Module):
    """Token嵌入层: vocab_size个token → d_model维向量"""
    def __init__(self, vocab_size, d_model):
        super().__init__()
        self.embedding = nn.[blank](vocab_size, d_model)
        self.d_model = d_model
    
    def forward(self, x):
        # 乘sqrt(d_model)使嵌入和位置编码量级相近
        return self.embedding(x) * [blank]`,
        answers: ['Embedding', 'math.sqrt(self.d_model)'],
        acceptedAnswers: [
            ['Embedding', 'embedding'],
            ['math.sqrt(self.d_model)', 'math.sqrt(d_model)', 'self.d_model ** 0.5']
        ],
        explanation: '**Token Embedding**: nn.Embedding将离散ID映射为连续向量。乘√d_model是为了缩放，避免位置编码影响被淹没。'
    },
    {
        id: 104,
        type: '代码',
        topic: '手撕Transformer',
        difficulty: '进阶',
        order: 4,
        question: '【Step 4/14】位置编码 - 注入位置信息：',
        code: `class PositionalEncoding(nn.Module):
    """位置编码: 用sin/cos为序列添加位置信息"""
    def __init__(self, d_model, max_len=5000):
        super().__init__()
        pe = torch.zeros(max_len, d_model)
        position = torch.arange(0, max_len).unsqueeze(1).float()
        div_term = torch.exp(torch.arange(0, d_model, 2).float() * 
                            -(math.log(10000.0) / d_model))
        
        # 偶数维用sin, 奇数维用cos
        pe[:, 0::2] = torch.[blank](position * div_term)
        pe[:, 1::2] = torch.[blank](position * div_term)
        pe = pe.unsqueeze(0)
        self.register_buffer('pe', pe)
    
    def forward(self, x):
        return x + self.pe[:, :x.size(1), :]`,
        answers: ['sin', 'cos'],
        acceptedAnswers: [
            ['sin'],
            ['cos']
        ],
        explanation: '**位置编码**: Self-Attention对位置不敏感,需显式添加。公式: PE(pos,2i)=sin(...), PE(pos,2i+1)=cos(...)'
    },
    {
        id: 105,
        type: '代码',
        topic: '手撕Transformer',
        difficulty: '进阶',
        order: 5,
        question: '【Step 5/14】Scaled Dot-Product Attention核心：',
        code: `class ScaledDotProductAttention(nn.Module):
    """缩放点积注意力: Attention(Q,K,V) = softmax(QK^T/√d_k)V"""
    def __init__(self, dropout=0.1):
        super().__init__()
        self.dropout = nn.Dropout(dropout)
    
    def forward(self, Q, K, V, mask=None):
        d_k = Q.size(-1)
        # QK^T / √d_k
        scores = torch.matmul(Q, K.[blank](-2, -1)) / math.sqrt(d_k)
        
        # 应用mask
        if mask is not None:
            scores = scores.masked_fill(mask == 0, [blank])
        
        # softmax归一化
        attn_weights = F.[blank](scores, dim=-1)
        attn_weights = self.dropout(attn_weights)
        
        # 加权求和
        output = torch.matmul(attn_weights, V)
        return output, attn_weights`,
        answers: ['transpose', '-1e9', 'softmax'],
        acceptedAnswers: [
            ['transpose', 'permute'],
            ['-1e9', '-1e10', '-float("inf")', '-torch.inf'],
            ['softmax']
        ],
        explanation: '**Attention核心**: 1)点积 2)缩放/√d_k 3)mask 4)softmax 5)加权。复杂度O(n²d)'
    },
    {
        id: 106,
        type: '代码',
        topic: '手撕Transformer',
        difficulty: '进阶',
        order: 6,
        question: '【Step 6/14】Multi-Head Attention - 并行多个注意力头：',
        code: `class MultiHeadAttention(nn.Module):
    """多头注意力: 分h个头并行计算attention"""
    def __init__(self, d_model, num_heads, dropout=0.1):
        super().__init__()
        assert d_model % num_heads == 0
        self.d_model = d_model
        self.num_heads = num_heads
        self.d_k = d_model // num_heads
        
        # Q,K,V,O的投影矩阵
        self.W_Q = nn.[blank](d_model, d_model)
        self.W_K = nn.Linear(d_model, d_model)
        self.W_V = nn.Linear(d_model, d_model)
        self.W_O = nn.Linear(d_model, d_model)
        
        self.attention = ScaledDotProductAttention(dropout)
        self.dropout = nn.Dropout(dropout)
    
    def forward(self, Q, K, V, mask=None):
        batch_size = Q.size(0)
        
        # 投影并分割成多头
        Q = self.W_Q(Q).view(batch_size, -1, self.num_heads, self.d_k).[blank](1, 2)
        K = self.W_K(K).view(batch_size, -1, self.num_heads, self.d_k).transpose(1, 2)
        V = self.W_V(V).view(batch_size, -1, self.num_heads, self.d_k).transpose(1, 2)
        
        # 应用attention
        if mask is not None:
            mask = mask.unsqueeze(1)
        output, attn_weights = self.attention(Q, K, V, mask)
        
        # 合并多头
        output = output.transpose(1, 2).contiguous()
        output = output.view(batch_size, -1, self.[blank])
        output = self.W_O(output)
        
        return output, attn_weights`,
        answers: ['Linear', 'transpose', 'd_model'],
        acceptedAnswers: [
            ['Linear', 'linear'],
            ['transpose'],
            ['d_model']
        ],
        explanation: '**多头注意力**: 分h个头(d_k=d_model/h) → 并行计算 → concat → 投影。参数量4×d_model²'
    },
    {
        id: 107,
        type: '代码',
        topic: '手撕Transformer',
        difficulty: '进阶',
        order: 7,
        question: '【Step 7/14】FFN - 两层全连接网络：',
        code: `class PositionwiseFeedForward(nn.Module):
    """FFN: d_model → d_ff → d_model"""
    def __init__(self, d_model, d_ff, dropout=0.1):
        super().__init__()
        self.fc1 = nn.Linear(d_model, d_ff)
        self.fc2 = nn.Linear([blank], d_model)
        self.dropout = nn.Dropout(dropout)
    
    def forward(self, x):
        x = self.fc1(x)
        x = F.[blank](x)  # 激活函数
        x = self.dropout(x)
        x = self.fc2(x)
        return x`,
        answers: ['d_ff', 'relu'],
        acceptedAnswers: [
            ['d_ff'],
            ['relu', 'ReLU', 'gelu', 'GELU']
        ],
        explanation: '**FFN**: 两层全连接,d_ff通常是d_model的4倍。Position-wise:每个位置独立应用。'
    },
    {
        id: 108,
        type: '代码',
        topic: '手撕Transformer',
        difficulty: '进阶',
        order: 8,
        question: '【Step 8/14】Encoder Layer - Self-Attention + FFN：',
        code: `class EncoderLayer(nn.Module):
    """编码器层: Self-Attn → Add&Norm → FFN → Add&Norm"""
    def __init__(self, d_model, num_heads, d_ff, dropout=0.1):
        super().__init__()
        self.self_attn = MultiHeadAttention(d_model, num_heads, dropout)
        self.ffn = PositionwiseFeedForward(d_model, d_ff, dropout)
        
        self.norm1 = nn.[blank](d_model)
        self.norm2 = nn.LayerNorm(d_model)
        self.dropout1 = nn.Dropout(dropout)
        self.dropout2 = nn.Dropout(dropout)
    
    def forward(self, x, mask=None):
        # Self-Attention
        attn_output, _ = self.self_attn(x, x, x, mask)
        x = self.norm1(x + self.[blank](attn_output))
        
        # FFN
        ffn_output = self.ffn(x)
        x = self.norm2(x + self.dropout2([blank]))
        
        return x`,
        answers: ['LayerNorm', 'dropout1', 'ffn_output'],
        acceptedAnswers: [
            ['LayerNorm', 'layernorm'],
            ['dropout1'],
            ['ffn_output']
        ],
        explanation: '**Encoder Layer**: Self-Attention捕捉依赖,残差连接防梯度消失,LayerNorm稳定训练'
    },
    {
        id: 109,
        type: '代码',
        topic: '手撕Transformer',
        difficulty: '挑战',
        order: 9,
        question: '【Step 9/14】Decoder Layer - 含Masked Attn和Cross Attn：',
        code: `class DecoderLayer(nn.Module):
    """解码器层: 3个子层"""
    def __init__(self, d_model, num_heads, d_ff, dropout=0.1):
        super().__init__()
        self.self_attn = MultiHeadAttention(d_model, num_heads, dropout)
        self.cross_attn = MultiHeadAttention(d_model, num_heads, dropout)
        self.ffn = PositionwiseFeedForward(d_model, d_ff, dropout)
        
        self.norm1 = nn.LayerNorm(d_model)
        self.norm2 = nn.LayerNorm(d_model)
        self.norm3 = nn.LayerNorm(d_model)
        self.dropout1 = nn.Dropout(dropout)
        self.dropout2 = nn.Dropout(dropout)
        self.dropout3 = nn.Dropout(dropout)
    
    def forward(self, x, encoder_output, src_mask=None, tgt_mask=None):
        # Masked Self-Attention
        attn_output, _ = self.self_attn(x, x, x, [blank])
        x = self.norm1(x + self.dropout1(attn_output))
        
        # Cross-Attention: Q来自decoder, K/V来自encoder
        attn_output, _ = self.cross_attn([blank], encoder_output, encoder_output, src_mask)
        x = self.norm2(x + self.dropout2(attn_output))
        
        # FFN
        ffn_output = self.ffn(x)
        x = self.norm3(x + self.dropout3(ffn_output))
        
        return x`,
        answers: ['tgt_mask', 'x'],
        acceptedAnswers: [
            ['tgt_mask'],
            ['x']
        ],
        explanation: '**Decoder Layer**: 1)Masked Self-Attn(只看过去) 2)Cross-Attn(关注encoder) 3)FFN'
    },
    {
        id: 110,
        type: '代码',
        topic: '手撕Transformer',
        difficulty: '挑战',
        order: 10,
        question: '【Step 10/14】Encoder - 堆叠多层EncoderLayer：',
        code: `class Encoder(nn.Module):
    """编码器: Token Emb + Pos Enc + N×EncoderLayer"""
    def __init__(self, vocab_size, d_model, num_heads, d_ff, 
                 num_layers, dropout=0.1, max_len=5000):
        super().__init__()
        self.token_embedding = TokenEmbedding(vocab_size, d_model)
        self.pos_encoding = PositionalEncoding(d_model, max_len)
        
        self.layers = nn.[blank]([
            EncoderLayer(d_model, num_heads, d_ff, dropout)
            for _ in range([blank])
        ])
        self.dropout = nn.Dropout(dropout)
    
    def forward(self, src, src_mask=None):
        x = self.token_embedding(src)
        x = self.pos_encoding(x)
        x = self.dropout(x)
        
        for layer in self.layers:
            x = layer(x, src_mask)
        
        return x`,
        answers: ['ModuleList', 'num_layers'],
        acceptedAnswers: [
            ['ModuleList', 'modulelist'],
            ['num_layers']
        ],
        explanation: '**Encoder**: 用nn.ModuleList堆叠层。BERT-base=12层, GPT-3=96层, 原始=6层'
    },
    {
        id: 111,
        type: '代码',
        topic: '手撕Transformer',
        difficulty: '挑战',
        order: 11,
        question: '【Step 11/14】Decoder - 堆叠多层DecoderLayer：',
        code: `class Decoder(nn.Module):
    """解码器: 每层都接收encoder输出"""
    def __init__(self, vocab_size, d_model, num_heads, d_ff,
                 num_layers, dropout=0.1, max_len=5000):
        super().__init__()
        self.token_embedding = TokenEmbedding(vocab_size, d_model)
        self.pos_encoding = PositionalEncoding(d_model, max_len)
        
        self.layers = nn.ModuleList([
            DecoderLayer(d_model, num_heads, d_ff, dropout)
            for _ in range(num_layers)
        ])
        self.dropout = nn.Dropout(dropout)
    
    def forward(self, tgt, encoder_output, src_mask=None, tgt_mask=None):
        x = self.token_embedding(tgt)
        x = self.pos_encoding(x)
        x = self.dropout(x)
        
        for layer in self.[blank]:
            x = layer(x, [blank], src_mask, tgt_mask)
        
        return x`,
        answers: ['layers', 'encoder_output'],
        acceptedAnswers: [
            ['layers', 'self.layers'],
            ['encoder_output']
        ],
        explanation: '**Decoder**: 每层通过Cross-Attention接收encoder输出(memory)'
    },
    {
        id: 112,
        type: '代码',
        topic: '手撕Transformer',
        difficulty: '挑战',
        order: 12,
        question: '【Step 12/14】Transformer - 组合Encoder和Decoder：',
        code: `class Transformer(nn.Module):
    """完整Transformer: Src→Encoder→Decoder←Tgt"""
    def __init__(self, src_vocab_size, tgt_vocab_size, d_model=512, 
                 num_heads=8, d_ff=2048, num_layers=6, dropout=0.1, max_len=5000):
        super().__init__()
        
        self.encoder = [blank](src_vocab_size, d_model, num_heads, 
                                      d_ff, num_layers, dropout, max_len)
        self.decoder = Decoder(tgt_vocab_size, d_model, num_heads,
                              d_ff, num_layers, dropout, max_len)
        
        # 输出投影: d_model → vocab_size
        self.output_projection = nn.Linear([blank], tgt_vocab_size)
    
    def forward(self, src, tgt, src_mask=None, tgt_mask=None):
        encoder_output = self.encoder(src, src_mask)
        decoder_output = self.decoder(tgt, encoder_output, src_mask, tgt_mask)
        output = self.[blank](decoder_output)
        return output
    
    def generate_square_subsequent_mask(self, sz):
        """生成causal mask(下三角)"""
        mask = torch.triu(torch.ones(sz, sz), diagonal=1).bool()
        return ~mask`,
        answers: ['Encoder', 'd_model', 'output_projection'],
        acceptedAnswers: [
            ['Encoder'],
            ['d_model'],
            ['output_projection', 'self.output_projection']
        ],
        explanation: '**Transformer**: Encoder处理源序列→Decoder生成目标序列。标准配置65M参数'
    },
    {
        id: 113,
        type: '选择',
        topic: '手撕Transformer',
        difficulty: '挑战',
        order: 13,
        question: '【Step 13/14】参数初始化策略：',
        options: [
            'A. 全部初始化为0',
            'B. 全部初始化为1',
            'C. Xavier/Glorot初始化(Linear)，正态分布(Embedding)',
            'D. 随机初始化'
        ],
        correct: 2,
        explanation: '**参数初始化**: Linear用Xavier保持方差稳定,Embedding用正态(std=0.02),Bias初始化为0。全0会导致对称性问题。'
    },
    {
        id: 114,
        type: '选择',
        topic: '手撕Transformer',
        difficulty: '挑战',
        order: 14,
        question: '【Step 14/14】Transformer的核心创新：',
        options: [
            'A. 使用CNN代替RNN',
            'B. 完全基于Attention，实现并行化和长距离依赖',
            'C. 引入LSTM门控机制',
            'D. 使用更深网络'
        ],
        correct: 1,
        explanation: '**恭喜完成！** Transformer革命性创新: 1)完全基于Attention 2)并行训练 3)长距离依赖建模 4)可扩展到数十亿参数'
    },

    // ==================== 新增：进阶默写挑战 ====================
    {
        id: 201,
        type: '提示',
        topic: '进阶默写挑战',
        difficulty: '挑战',
        order: 1,
        question: '【进阶默写 - 说明】',
        content: `**🔥 进阶默写挑战**

这是更困难的默写版本！我们将从TokenEmbedding开始，只保留最关键的提示，大部分代码需要你自己写。

**规则:**
• 只在关键位置提供少量注释
• 留出更多空白给你填写
• 点击"查看答案"可以切换到完整代码参考
• 再次点击切换回默写界面

**准备好了吗？开始挑战！**`,
        explanation: ''
    },
    {
        id: 202,
        type: '代码默写',
        topic: '进阶默写挑战',
        difficulty: '挑战',
        order: 2,
        question: '【默写1/6】TokenEmbedding - 仅保留类定义',
        code: `class TokenEmbedding(nn.Module):
    # 初始化
    [blank]
    
    # forward方法
    [blank]`,
        answers: ['init', 'forward'],
        fullCode: `class TokenEmbedding(nn.Module):
    def __init__(self, vocab_size, d_model):
        super().__init__()
        self.embedding = nn.Embedding(vocab_size, d_model)
        self.d_model = d_model
    
    def forward(self, x):
        return self.embedding(x) * math.sqrt(self.d_model)`,
        explanation: '**TokenEmbedding**: 需要nn.Embedding层和forward中的sqrt(d_model)缩放'
    },
    {
        id: 203,
        type: '代码默写',
        topic: '进阶默写挑战',
        difficulty: '挑战',
        order: 3,
        question: '【默写2/6】PositionalEncoding - 实现sin/cos位置编码',
        code: `class PositionalEncoding(nn.Module):
    def __init__(self, d_model, max_len=5000):
        super().__init__()
        # 创建位置编码矩阵
        [blank]
        
        # 注册buffer
        [blank]
    
    def forward(self, x):
        # 添加位置编码
        [blank]`,
        answers: ['pe', 'register', 'add'],
        fullCode: `class PositionalEncoding(nn.Module):
    def __init__(self, d_model, max_len=5000):
        super().__init__()
        pe = torch.zeros(max_len, d_model)
        position = torch.arange(0, max_len).unsqueeze(1).float()
        div_term = torch.exp(torch.arange(0, d_model, 2).float() * 
                            -(math.log(10000.0) / d_model))
        pe[:, 0::2] = torch.sin(position * div_term)
        pe[:, 1::2] = torch.cos(position * div_term)
        pe = pe.unsqueeze(0)
        self.register_buffer('pe', pe)
    
    def forward(self, x):
        return x + self.pe[:, :x.size(1), :]`,
        explanation: '**PositionalEncoding**: 关键是sin/cos公式和register_buffer'
    },
    {
        id: 204,
        type: '代码默写',
        topic: '进阶默写挑战',
        difficulty: '挑战',
        order: 4,
        question: '【默写3/6】ScaledDotProductAttention - 完整实现',
        code: `class ScaledDotProductAttention(nn.Module):
    # 完整实现attention计算
    [blank]`,
        answers: ['attention'],
        fullCode: `class ScaledDotProductAttention(nn.Module):
    def __init__(self, dropout=0.1):
        super().__init__()
        self.dropout = nn.Dropout(dropout)
    
    def forward(self, Q, K, V, mask=None):
        d_k = Q.size(-1)
        scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(d_k)
        
        if mask is not None:
            scores = scores.masked_fill(mask == 0, -1e9)
        
        attn_weights = F.softmax(scores, dim=-1)
        attn_weights = self.dropout(attn_weights)
        output = torch.matmul(attn_weights, V)
        
        return output, attn_weights`,
        explanation: '**Attention**: QK^T / √d_k → mask → softmax → 乘V'
    },
    {
        id: 205,
        type: '代码默写',
        topic: '进阶默写挑战',
        difficulty: '挑战',
        order: 5,
        question: '【默写4/6】MultiHeadAttention - 实现多头机制',
        code: `class MultiHeadAttention(nn.Module):
    def __init__(self, d_model, num_heads, dropout=0.1):
        # 初始化投影矩阵和attention
        [blank]
    
    def forward(self, Q, K, V, mask=None):
        # 实现: 投影→分头→attention→合并→输出投影
        [blank]`,
        answers: ['init', 'forward'],
        fullCode: `class MultiHeadAttention(nn.Module):
    def __init__(self, d_model, num_heads, dropout=0.1):
        super().__init__()
        assert d_model % num_heads == 0
        self.d_model = d_model
        self.num_heads = num_heads
        self.d_k = d_model // num_heads
        
        self.W_Q = nn.Linear(d_model, d_model)
        self.W_K = nn.Linear(d_model, d_model)
        self.W_V = nn.Linear(d_model, d_model)
        self.W_O = nn.Linear(d_model, d_model)
        
        self.attention = ScaledDotProductAttention(dropout)
        self.dropout = nn.Dropout(dropout)
    
    def forward(self, Q, K, V, mask=None):
        batch_size = Q.size(0)
        
        Q = self.W_Q(Q).view(batch_size, -1, self.num_heads, self.d_k).transpose(1, 2)
        K = self.W_K(K).view(batch_size, -1, self.num_heads, self.d_k).transpose(1, 2)
        V = self.W_V(V).view(batch_size, -1, self.num_heads, self.d_k).transpose(1, 2)
        
        if mask is not None:
            mask = mask.unsqueeze(1)
        output, attn_weights = self.attention(Q, K, V, mask)
        
        output = output.transpose(1, 2).contiguous()
        output = output.view(batch_size, -1, self.d_model)
        output = self.W_O(output)
        
        return output, attn_weights`,
        explanation: '**MultiHead**: 4个投影矩阵, view+transpose分头, attention, 合并'
    },
    {
        id: 206,
        type: '代码默写',
        topic: '进阶默写挑战',
        difficulty: '挑战',
        order: 6,
        question: '【默写5/6】EncoderLayer - Self-Attention + FFN',
        code: `class EncoderLayer(nn.Module):
    # 实现: self_attn, ffn, 2个norm, 2个dropout
    def __init__(self, d_model, num_heads, d_ff, dropout=0.1):
        [blank]
    
    def forward(self, x, mask=None):
        # Self-Attention → Add&Norm
        # FFN → Add&Norm
        [blank]`,
        answers: ['init', 'forward'],
        fullCode: `class EncoderLayer(nn.Module):
    def __init__(self, d_model, num_heads, d_ff, dropout=0.1):
        super().__init__()
        self.self_attn = MultiHeadAttention(d_model, num_heads, dropout)
        self.ffn = PositionwiseFeedForward(d_model, d_ff, dropout)
        
        self.norm1 = nn.LayerNorm(d_model)
        self.norm2 = nn.LayerNorm(d_model)
        self.dropout1 = nn.Dropout(dropout)
        self.dropout2 = nn.Dropout(dropout)
    
    def forward(self, x, mask=None):
        attn_output, _ = self.self_attn(x, x, x, mask)
        x = self.norm1(x + self.dropout1(attn_output))
        
        ffn_output = self.ffn(x)
        x = self.norm2(x + self.dropout2(ffn_output))
        
        return x`,
        explanation: '**EncoderLayer**: 残差连接是关键 x = norm(x + dropout(sublayer(x)))'
    },
    {
        id: 207,
        type: '代码默写',
        topic: '进阶默写挑战',
        difficulty: '挑战',
        order: 7,
        question: '【默写6/6】Encoder完整实现',
        code: `class Encoder(nn.Module):
    # 实现: embedding, pos_encoding, layers堆叠
    def __init__(self, vocab_size, d_model, num_heads, d_ff, 
                 num_layers, dropout=0.1, max_len=5000):
        [blank]
    
    def forward(self, src, src_mask=None):
        # embedding → pos → layers
        [blank]`,
        answers: ['init', 'forward'],
        fullCode: `class Encoder(nn.Module):
    def __init__(self, vocab_size, d_model, num_heads, d_ff, 
                 num_layers, dropout=0.1, max_len=5000):
        super().__init__()
        self.token_embedding = TokenEmbedding(vocab_size, d_model)
        self.pos_encoding = PositionalEncoding(d_model, max_len)
        
        self.layers = nn.ModuleList([
            EncoderLayer(d_model, num_heads, d_ff, dropout)
            for _ in range(num_layers)
        ])
        self.dropout = nn.Dropout(dropout)
    
    def forward(self, src, src_mask=None):
        x = self.token_embedding(src)
        x = self.pos_encoding(x)
        x = self.dropout(x)
        
        for layer in self.layers:
            x = layer(x, src_mask)
        
        return x`,
        explanation: '**Encoder完整**: embedding+pos → N×EncoderLayer。恭喜完成默写挑战!'
    },

    // ==================== BERT专题 ====================
    {
        id: 115,
        type: '选择',
        topic: 'BERT',
        difficulty: '进阶',
        question: 'BERT的全称是什么？它的核心创新是什么？',
        options: [
            'A. Bidirectional Encoder Representations from Transformers；使用双向Transformer编码',
            'B. Binary Encoded Representations with Transformers；使用二进制编码',
            'C. Bidirectional Embedding with RNN Transformers；结合RNN和Transformer',
            'D. Basic Encoder with Recurrent Transformers；使用循环Transformer'
        ],
        correct: 0,
        explanation: 'BERT全称是**Bidirectional Encoder Representations from Transformers**。\n\n**核心创新**：\n1. **双向上下文建模**：通过Masked Language Model (MLM)，BERT可以同时看到左右两侧的上下文，而不像GPT那样只能看到左侧。\n2. **深度双向**：使用Transformer Encoder（而非Decoder），每个位置都能attend到整个序列。\n3. **预训练-微调范式**：大规模无监督预训练 + 下游任务微调，开创了NLP新时代。\n\n对比：\n• GPT：单向（left-to-right），使用Decoder\n• ELMo：浅层双向（独立的left-to-right和right-to-left LSTM拼接）\n• BERT：深度双向，使用Transformer Encoder'
    },
    {
        id: 116,
        type: '选择',
        topic: 'BERT',
        difficulty: '进阶',
        question: 'BERT的两个预训练任务是什么？',
        options: [
            'A. 机器翻译 + 文本分类',
            'B. Masked Language Model (MLM) + Next Sentence Prediction (NSP)',
            'C. 自回归语言模型 + 命名实体识别',
            'D. 文本生成 + 问答'
        ],
        correct: 1,
        explanation: '**BERT的两个预训练任务**：\n\n**1. Masked Language Model (MLM)**：\n• 随机mask 15%的token（用[MASK]替换）\n• 模型预测被mask的token\n• 使BERT能够学习双向上下文表示\n• 例如："我喜欢[MASK]苹果" → 预测"吃"\n\n**2. Next Sentence Prediction (NSP)**：\n• 给定两个句子A和B，预测B是否是A的下一句\n• 50%正样本（真实的下一句），50%负样本（随机句子）\n• 帮助模型理解句子间关系\n• 对问答、NLI等任务有帮助\n\n**注意**：后续研究（如RoBERTa）发现NSP任务的作用有限，去掉NSP后性能几乎不受影响。但MLM是BERT的核心，不可或缺。\n\n**mask策略细节**：\n• 80%真的用[MASK]替换\n• 10%用随机token替换\n• 10%保持不变\n目的是让模型不要过度依赖[MASK]标记。'
    },
    {
        id: 117,
        type: '选择',
        topic: 'BERT',
        difficulty: '进阶',
        question: 'BERT的mask策略为什么不是100%用[MASK]替换，而是80%[MASK] + 10%随机 + 10%不变？',
        options: [
            'A. 为了加速训练',
            'B. 防止模型过度依赖[MASK]标记，因为微调时不会有[MASK]',
            'C. 增加训练难度',
            'D. 减少过拟合'
        ],
        correct: 1,
        explanation: '**Mask策略的精妙设计**：\n\n**如果100%用[MASK]**：\n```python\n训练: "我喜欢[MASK]苹果"\n预测: "吃"\n\n微调/推理: "我喜欢吃苹果"  # 没有[MASK]！\n模型懵逼: 没见过没有[MASK]的句子\n```\n\n**问题**：\n• **训练-推理不一致**\n• 模型过度依赖[MASK]标记\n• 看到[MASK]才知道要预测\n• 微调时性能下降\n\n**混合策略（BERT的方案）**：\n\n**选15%的token进行mask，其中**：\n\n**80%用[MASK]替换**：\n```python\n"我喜欢[MASK]苹果" → 预测"吃"\n```\n• 主要训练方式\n• 让模型学习填空\n\n**10%用随机token替换**：\n```python\n"我喜欢狗苹果" → 预测"吃"\n```\n• 强迫模型依赖上下文\n• 不能只看当前token\n• 学习纠错能力\n\n**10%保持不变**：\n```python\n"我喜欢吃苹果" → 预测"吃"\n```\n• 让模型学习所有token的表示\n• 不只是mask位置\n• 减轻训练-推理gap\n\n**数学上的效果**：\n\n**期望训练**：\n```\n看到[MASK]: 80%概率\n看到随机词: 10%概率  \n看到正确词: 10%概率\n\n模型被迫：\n1. 学会理解[MASK]\n2. 学会从上下文纠错\n3. 学会处理正常句子\n```\n\n**实验验证**：\n\n**消融实验**：\n```\n100% [MASK]:        GLUE分数 82.3\n80/10/10策略:       GLUE分数 84.4  ✓\n90/5/5策略:         GLUE分数 83.8\n70/15/15策略:       GLUE分数 83.9\n\n80/10/10是最优的！\n```\n\n**为什么这个比例**：\n• **80%**：足够的mask信号\n• **10%随机**：学习鲁棒性，但不太多（否则太难）\n• **10%不变**：平滑训练-推理差异\n\n**类比**：\n就像考试练习：\n• 80%的题有明确空格（正常练习）\n• 10%的题有错误选项（培养纠错能力）\n• 10%的题没有空格（考验真正理解）\n\n**对比RoBERTa的改进**：\nRoBERTa动态mask：\n• 每个epoch不同的mask\n• 数据增强效果\n• 进一步提升性能\n\n**代码实现**：\n```python\ndef mask_tokens(tokens, tokenizer):\n    labels = tokens.clone()\n    \n    # 选15%的token\n    probability_matrix = torch.full(tokens.shape, 0.15)\n    masked_indices = torch.bernoulli(probability_matrix).bool()\n    \n    # 80%: 用[MASK]替换\n    indices_replaced = torch.bernoulli(torch.full(tokens.shape, 0.8)).bool() & masked_indices\n    tokens[indices_replaced] = tokenizer.mask_token_id\n    \n    # 10%: 随机替换\n    indices_random = torch.bernoulli(torch.full(tokens.shape, 0.5)).bool() & masked_indices & ~indices_replaced\n    random_tokens = torch.randint(len(tokenizer), tokens.shape, dtype=torch.long)\n    tokens[indices_random] = random_tokens[indices_random]\n    \n    # 10%: 保持不变（自动满足）\n    \n    return tokens, labels\n```\n\n**总结**：这个80/10/10策略是BERT的关键设计，完美平衡了训练效果和推理一致性！\n\n答案是**B：防止过度依赖[MASK]**！'
    },
    {
        id: 118,
        type: '选择',
        topic: 'BERT',
        difficulty: '进阶',
        question: 'BERT-base和BERT-large的主要区别是什么？',
        options: [
            'A. base用NSP，large不用',
            'B. base有12层，large有24层；base的d_model=768，large的d_model=1024',
            'C. base用于分类，large用于生成',
            'D. base是单语言，large是多语言'
        ],
        correct: 1,
        explanation: '**BERT-base vs BERT-large**：\n\n**BERT-base**：\n```python\nLayers (L):        12\nHidden Size (H):   768\nAttention Heads:   12\nParameters:        110M\n\nFFN hidden:        3072 (4×768)\nMax Length:        512\nVocab Size:        30,000\n```\n\n**BERT-large**：\n```python\nLayers (L):        24  ← 2倍\nHidden Size (H):   1024  ← 更大\nAttention Heads:   16  ← 更多\nParameters:        340M  ← 3倍多！\n\nFFN hidden:        4096 (4×1024)\nMax Length:        512\nVocab Size:        30,000\n```\n\n**参数量对比**：\n```\nBERT-base:  110M\nBERT-large: 340M (3.1x)\n\n主要增加：\n- 层数翻倍: 12→24\n- 隐藏层变大: 768→1024\n- 头数增加: 12→16\n```\n\n**性能对比（GLUE benchmark）**：\n```\nBERT-base:  79.6%\nBERT-large: 82.1%  (+2.5%)\n\n提升显著，但成本也高！\n```\n\n**各任务对比**：\n\n**MNLI (自然语言推理)**：\n```\nbase:  84.6%\nlarge: 86.7%  (+2.1%)\n```\n\n**QQP (问题对匹配)**：\n```\nbase:  71.2%\nlarge: 72.1%  (+0.9%)\n```\n\n**QNLI (问答NLI)**：\n```\nbase:  90.5%\nlarge: 92.7%  (+2.2%)\n```\n\n**SQuAD (阅读理解)**：\n```\nbase:  F1 88.5%\nlarge: F1 90.9%  (+2.4%)\n```\n\n**训练成本**：\n```\nBERT-base:\n  GPU: 4个 Cloud TPUs (16 TPU chips)\n  Time: 4天\n  Cost: ~$7K\n\nBERT-large:\n  GPU: 16个 Cloud TPUs (64 TPU chips)\n  Time: 4天\n  Cost: ~$25K\n```\n\n**内存占用**：\n```\nBERT-base:\n  模型: ~450MB\n  推理batch=32: ~8GB GPU\n\nBERT-large:\n  模型: ~1.3GB\n  推理batch=32: ~16GB GPU\n```\n\n**选择建议**：\n\n**用BERT-base**：\n✓ 资源有限\n✓ 实时应用（低延迟）\n✓ 移动端部署\n✓ 大多数NLP任务\n✓ 快速原型\n\n**用BERT-large**：\n✓ 追求极致性能\n✓ 复杂任务（如问答）\n✓ 学术研究\n✓ 有充足GPU资源\n✓ 可以接受慢速度\n\n**其他错误选项分析**：\n\n**选项A（NSP）**：\n• 两个模型都用NSP\n• NSP是BERT的标准组件\n• RoBERTa才去掉NSP\n\n**选项C（分类vs生成）**：\n• 两者都主要用于理解任务\n• 都不擅长生成（用GPT）\n• 只是规模不同\n\n**选项D（单语言vs多语言）**：\n• BERT有单独的多语言版本（mBERT）\n• base和large都有英文和多语言版本\n• 这不是base vs large的区别\n\n**还有其他变体**：\n\n**BERT-tiny/mini/small**：\n```\nTiny:  L=2, H=128, 4M params\nMini:  L=4, H=256, 11M params\nSmall: L=4, H=512, 29M params\n\n用于移动端/边缘设备\n```\n\n**实践经验**：\n```\n大多数任务：base够用\n卡排行榜：用large\n工业部署：用base或更小\n学术研究：都试试\n```\n\n**后续更大模型**：\n```\nRoBERTa-large: 355M (类似BERT-large)\nALBERT-xxlarge: 233M (参数共享)\nELECTRA-large: 335M\n```\n\n答案是**B：层数和隐藏层大小的区别**！'
    },
    {
        id: 119,
        type: '选择',
        topic: 'BERT',
        difficulty: '进阶',
        question: 'BERT的[CLS]标记有什么特殊作用？',
        options: [
            'A. 标记句子开始',
            'B. 用于句子级别任务的句子表示',
            'C. 用于mask预测',
            'D. 没有特殊作用'
        ],
        correct: 1,
        explanation: '**[CLS] Token的设计哲学**：\n\n**位置**：\n```python\ninput = "[CLS] I love NLP [SEP]"\n         ↑\n      始终在最前面\n```\n\n**主要作用**：**聚合整个句子的信息**\n\n**为什么[CLS]能代表整句？**\n\n**1. Self-Attention机制**：\n```python\nLayer 1:\n  [CLS] attends to: [CLS], I, love, NLP, [SEP]\n  → 收集所有token的信息\n\nLayer 2:\n  [CLS] attends to all (再次聚合)\n  \n...\n\nLayer 12:\n  [CLS] = 全句信息的浓缩表示\n```\n\n**2. 没有实际语义**：\n• [CLS]不代表任何具体词\n• 像一个"信息收集器"\n• 专门用于聚合上下文\n\n**3. 双向上下文**：\n• BERT是双向的\n• [CLS]可以看到整个句子\n• 左右两侧的信息\n\n**具体应用**：\n\n**分类任务**：\n```python\n# 情感分类\ninput = "[CLS] This movie is great! [SEP]"\n\n# 取[CLS]的表示\ncls_embedding = bert_output[0]  # [batch, hidden]\n\n# 接分类层\nlogits = classifier(cls_embedding)\nclass = argmax(logits)  # Positive/Negative\n```\n\n**句子对任务（NLI）**：\n```python\ninput = "[CLS] 猫在睡觉 [SEP] 动物在休息 [SEP]"\n\ncls_embedding = bert_output[0]\nlogits = classifier(cls_embedding)\nrelation = argmax(logits)  # Entailment/Contradiction/Neutral\n```\n\n**问答任务（不用[CLS]）**：\n```python\n# SQuAD: 需要标记答案span\n# 用每个token的表示，不是[CLS]\n\nstart_logits = start_classifier(all_token_embeddings)\nend_logits = end_classifier(all_token_embeddings)\n```\n\n**命名实体识别（不用[CLS]）**：\n```python\n# Token级别任务\n# 需要每个token的标签\n\ntags = ner_classifier(all_token_embeddings)\n# 输出: [B-PER, I-PER, O, B-LOC, ...]\n```\n\n**对比其他Token**：\n\n**[SEP]**：\n• 分隔两个句子\n• 标记句子边界\n• 不用于表示提取\n\n**普通Token**：\n• 有具体语义\n• 用于token级别任务\n• 或作为上下文\n\n**[CLS]独特性**：\n• 专门设计用于句子表示\n• 训练时通过NSP任务优化\n• 聚合全局信息\n\n**为什么不用[SEP]或其他？**\n\n**[SEP]的问题**：\n• 在句子中间/末尾\n• 信息流动不对称\n• 左侧信息比右侧多\n\n**[CLS]的优势**：\n• 在最前面\n• 与所有token等距\n• 信息聚合更平衡\n\n**训练过程**：\n\n**MLM**：\n• [CLS]不会被mask\n• 但参与attention计算\n• 学习聚合上下文\n\n**NSP**：\n```python\ninput = "[CLS] SentA [SEP] SentB [SEP]"\n\nlabel = IsNext(SentA, SentB)  # 0或1\nloss = BCE(classifier(CLS_embedding), label)\n\n通过NSP，[CLS]专门学习句子级别关系\n```\n\n**实验证据**：\n\n**消融实验**：\n```\n用[CLS]:        分类准确率 85.2%\n用[SEP]:        分类准确率 83.1%\n用平均池化:      分类准确率 84.5%\n用max池化:      分类准确率 82.8%\n\n[CLS]最优！\n```\n\n**可视化发现**：\n• [CLS]的attention权重较为均匀\n• 不偏向任何特定词\n• 真的在"聚合"信息\n\n**代码示例**：\n```python\nfrom transformers import BertModel, BertTokenizer\n\ntokenizer = BertTokenizer.from_pretrained(\'bert-base-uncased\')\nmodel = BertModel.from_pretrained(\'bert-base-uncased\')\n\ntext = "I love NLP"\ninputs = tokenizer(text, return_tensors=\'pt\')\noutputs = model(**inputs)\n\n# 方法1: 取[CLS]\ncls_embedding = outputs.last_hidden_state[:, 0, :]  # [batch, hidden]\n\n# 方法2: 使用pooler_output（经过额外线性层+tanh）\npooled = outputs.pooler_output  # [batch, hidden]\n\n# 用于分类\nlogits = classifier(cls_embedding)  # 或用pooled\n```\n\n**pooler_output vs [CLS]**：\n```python\npooler_output = tanh(Linear([CLS]))\n\n# pooler_output是[CLS]经过额外变换\n# 为NSP任务专门设计\n# 微调时两者都能用\n```\n\n**现代改进**：\n\n**RoBERTa**：\n• 去掉NSP任务\n• [CLS]依然有效\n• 通过MLM隐式学习\n\n**ALBERT**：\n• 保留[CLS]\n• 用SOP(Sentence Order Prediction)代替NSP\n\n**T5**：\n• 没有特殊[CLS]标记\n• 因为是Encoder-Decoder架构\n\n**总结**：[CLS]是BERT的"全局视角"，专门用于提取句子级别表示！\n\n答案是**B：句子级别任务的表示**！'
    },
    {
        id: 120,
        type: '选择',
        topic: 'BERT',
        difficulty: '进阶',
        question: 'BERT的WordPiece tokenization相比word-level tokenization的优势是什么？',
        options: [
            'A. 速度更快',
            'B. 可以处理未登录词(OOV)，词表更小',
            'C. 准确率更高',
            'D. 不需要训练'
        ],
        correct: 1,
        explanation: '**WordPiece Tokenization详解**：\n\n**Word-level Tokenization的问题**：\n\n**1. 词表爆炸**：\n```python\n英文常用词: 10万+\n加上专有名词、派生词: 100万+\n词表太大！\n\n参数量 = vocab_size × d_model\n= 1,000,000 × 768 = 768M 参数\n光embedding就爆炸！\n```\n\n**2. 未登录词(OOV)**：\n```python\nVocab: ["cat", "dog", "run", "running"]\n\n遇到 "cats" → OOV！\n遇到 "runner" → OOV！\n遇到 "unbelievable" → OOV！\n\n无法处理新词\n```\n\n**3. 稀有词**：\n```python\n"Pneumonoultramicroscopicsilicovolcanoconiosis"\n这种词可能只出现1次\n但占用1个词表位置\n浪费！\n```\n\n---\n\n**WordPiece的解决方案**：\n\n**原理**：把词拆分成子词单元\n\n**例子**：\n```python\n# 原始文本\n"unbelievably"\n\n# Word-level\n["unbelievably"]  # 可能OOV\n\n# WordPiece  \n["un", "##believable", "##ly"]\n↑     ↑              ↑\n前缀  中间(##表示续接)  后缀\n\n拆成已知的片段！\n```\n\n**更多例子**：\n```python\n"playing" → ["play", "##ing"]\n"unhappiness" → ["un", "##happiness"]\n"COVID-19" → ["CO", "##VI", "##D", "-", "19"]\n"NLP" → ["NL", "##P"] 或 ["N", "##L", "##P"]\n```\n\n**优势1：处理OOV** ✓\n\n```python\n训练时没见过 "transformerization"\n\nWord-level: [UNK] → 信息丢失\n\nWordPiece: ["transform", "##er", "##ization"]\n→ 保留语义信息！\n→ "transform" + 动作化后缀\n```\n\n**优势2：词表更小** ✓\n\n```python\nWord-level词表:\n["play", "playing", "played", "player", "plays", "playful", ...]\n需要记住所有变形\n\nWordPiece词表:\n["play", "##ing", "##ed", "##er", "##s", "##ful"]\n通过组合表示所有变形\n\nBERT词表: ~30,000\nWord-level需要: 100,000+\n\n缩小3-4倍！\n```\n\n**优势3：语义保持**：\n\n```python\n"running" → ["run", "##ing"]\n\n"run"的embedding接近"running"的第一个piece\n共享词根语义\n泛化能力强\n```\n\n**训练过程（贪心算法）**：\n\n**1. 初始词表**：\n```python\n所有单字符: [\'a\', \'b\', \'c\', ..., \'z\']\n```\n\n**2. 迭代合并**：\n```python\nwhile vocab_size < target_size:\n    # 找出现频率最高的pair\n    most_frequent = find_most_frequent_pair(corpus)\n    # 如 ("t", "h") → "th"\n    \n    # 合并\n    merge("t", "h" → "th")\n    vocab.add("th")\n    \n# 重复直到达到目标大小（如30000）\n```\n\n**3. 结果**：\n```python\n高频subword: ["the", "##ing", "##ed", "un##", ...]\n中频subword: ["transform", "##ation", ...]\n低频/字符: ["q", "##xyz", ...]\n```\n\n**Tokenization过程**：\n\n```python\ndef tokenize(word):\n    # 贪心匹配最长subword\n    tokens = []\n    start = 0\n    \n    while start < len(word):\n        end = len(word)\n        found = False\n        \n        # 从最长到最短匹配\n        while start < end:\n            substr = word[start:end]\n            if substr in vocab:\n                tokens.append(substr)\n                start = end\n                found = True\n                break\n            end -= 1\n        \n        if not found:\n            tokens.append("[UNK]")\n            start += 1\n    \n    return tokens\n\n# 例子\ntokenize("unhappiness")\n→ ["un", "##happiness"]\n```\n\n**对比其他方法**：\n\n**BPE (Byte-Pair Encoding)**：\n• GPT系列使用\n• 类似WordPiece\n• 合并规则略不同\n\n**SentencePiece**：\n• XLNet、T5使用\n• 不需要预分词\n• 支持任意语言\n\n**Character-level**：\n• 词表最小（26个字母）\n• 但序列变很长\n• 训练困难\n\n**对比表**：\n\n| 方法 | 词表大小 | OOV | 序列长度 | 语义 |\n|------|----------|-----|----------|------|\n| Word | 100K+ | 有 | 短 | 强 |\n| WordPiece | 30K | **无** | 中 | **强** |\n| BPE | 50K | 无 | 中 | 强 |\n| Char | <100 | 无 | **长** | 弱 |\n\n**实际效果**：\n\n```python\nBERT (WordPiece 30K):\n  GLUE: 84.4\n  SQuAD: F1 90.9\n\nBERT (Word 100K):\n  GLUE: 82.1  (-2.3%)\n  SQuAD: F1 88.5  (-2.4%)\n  参数更多，效果更差！\n\nBERT (Char-level):\n  GLUE: 78.5  (-5.9%)\n  序列太长，难以训练\n```\n\n**代码示例**：\n\n```python\nfrom transformers import BertTokenizer\n\ntokenizer = BertTokenizer.from_pretrained(\'bert-base-uncased\')\n\n# 例子1: 常见词\nprint(tokenizer.tokenize("playing"))\n# [\'play\', \'##ing\']\n\n# 例子2: 罕见词\nprint(tokenizer.tokenize("unbelievability"))\n# [\'un\', \'##bel\', \'##ie\', \'##va\', \'##bility\']\n\n# 例子3: 新词\nprint(tokenizer.tokenize("COVID-19"))\n# [\'co\', \'##vid\', \'-\', \'19\']\n\n# 词表大小\nprint(len(tokenizer.vocab))  # 30522\n```\n\n**特殊标记**：\n```python\n[CLS]: 句子开始\n[SEP]: 句子分隔\n[MASK]: mask标记\n[UNK]: 未知（很少用到）\n[PAD]: padding\n\n这些不参与WordPiece切分\n```\n\n**##符号的作用**：\n```python\n表示这个piece不是词的开始\n\n"unhappy":\n["un", "##happy"]\n  ↑      ↑\n  开始    续接\n\n恢复原词:\n"un" + "##happy".replace("##", "") = "unhappy"\n```\n\n**总结**：WordPiece是BERT成功的关键技术之一，优雅地平衡了词表大小、OOV处理和语义表示！\n\n答案是**B：处理OOV，词表更小**！'
    },
    {
        id: 121,
        type: '选择',
        topic: 'BERT',
        difficulty: '进阶',
        question: 'BERT可以直接用于文本生成任务吗？',
        options: [
            'A. 可以，BERT是通用模型',
            'B. 不太适合，BERT是双向编码器，没有自回归生成能力',
            'C. 可以，只需要改变loss函数',
            'D. 可以，通过mask来生成'
        ],
        correct: 1,
        explanation: '**BERT vs 生成任务**：\n\n**BERT的架构限制**：\n\n**1. 双向注意力**：\n```python\n# BERT的Self-Attention\nfor each token:\n    attend to ALL tokens (left + right)\n\n例子: "I love ___"\nBERT在预测第3个词时，已经看到了整个句子！\n\n生成时:\n  应该: "I" → "love" → "NLP" (顺序)\n  BERT: 同时看到所有 (违反因果性)\n```\n\n**2. 没有自回归能力**：\n```python\n# GPT (自回归)\nP(句子) = P(w1) × P(w2|w1) × P(w3|w1,w2) × ...\n每步只看历史，符合生成\n\n# BERT (双向)\nP(wi | all other words)\n需要看到完整上下文，无法顺序生成\n```\n\n**3. 训练目标不同**：\n```python\n# BERT (MLM)\n随机mask，填空\n"I [MASK] NLP" → 预测"love"\n\n# GPT (CLM - Causal LM)\n顺序预测下一个词\n"I love" → 预测"NLP"\n```\n\n**如果强行用BERT生成会怎样？**\n\n**尝试1：迭代mask生成**\n```python\n# 初始: 全是[MASK]\n"[MASK] [MASK] [MASK] [MASK]"\n\n# Step 1: 预测所有mask，选概率最高的\n"I [MASK] [MASK] [MASK]"\n\n# Step 2: 继续预测\n"I love [MASK] [MASK]"\n\n# Step 3\n"I love NLP [MASK]"\n\n# Step 4\n"I love NLP !"\n```\n\n**问题**：\n• 每步都重新编码整个序列，**超慢**\n• 生成质量差（不连贯）\n• 没有全局规划\n• 无法控制长度\n\n**尝试2：用BERT的解码器部分**\n```python\n# 问题：BERT没有解码器！\n# BERT只是Encoder\n# Transformer = Encoder + Decoder\n# BERT = Encoder only\n```\n\n**实验证据**：\n\n**生成质量对比**：\n```\n任务: 写一个句子续写\n\nGPT-2:\n  "Once upon a time, there was a little girl who loved to read books..."\n  流畅，连贯\n\nBERT (迭代mask):\n  "Once upon time little girl loved read books..."\n  不自然，不连贯\n\nBERT根本不是为生成设计的！\n```\n\n**BERT能做什么生成相关的？**\n\n**1. 填空生成**：\n```python\n# 这个可以\n"I want to [MASK] a book"\nBERT → "read" / "write" / "buy"\n\n固定模板的填空\n```\n\n**2. 完形填空**：\n```python\n"The cat [MASK] on the mat"\nBERT → "sat" / "slept" / "lay"\n\n单个或少数词的预测\n```\n\n**3. 改写/纠错**：\n```python\n"I goes to school"  \nMask "goes" → BERT → "go"\n\n已知上下文的修改\n```\n\n**为什么不用BERT生成？**\n\n**架构问题**：\n```\nBERT: Encoder only\n  输入 → 表示\n  适合: 理解任务\n  \nGPT: Decoder only  \n  历史 → 下一个词\n  适合: 生成任务\n  \nT5: Encoder-Decoder\n  源 → 目标\n  适合: 翻译、摘要\n```\n\n**训练目标问题**：\n```\nBERT (MLM):\n  学会理解上下文\n  预测被mask的词\n  \nGPT (CLM):\n  学会生成下一个词\n  建模序列概率\n  \n目标完全不同！\n```\n\n**正确的生成模型选择**：\n\n**自由生成**：\n```python\nGPT-2/3:    通用文本生成\nLLaMA:      开源LLM\nChatGPT:    对话生成\n```\n\n**条件生成**：\n```python\nT5:         Text-to-Text\nBART:       Denoising + Generation\nPegasus:    摘要生成\n```\n\n**特定任务**：\n```python\nMarianMT:   翻译\nGPT-2:      文章续写\nCodex:      代码生成\n```\n\n**BERT家族在生成上的探索**：\n\n**BERT-based生成尝试**（效果都不好）：\n• **BERT-Iterative**: 迭代mask，很慢\n• **BERT-MLM sampling**: 随机采样mask，质量差\n• **BERT-Gibbs**: Gibbs采样，不流畅\n\n**改进的双向模型**：\n• **XLNet**: 排列语言模型，可生成\n• **UniLM**: 统一LM，支持生成\n但效果仍不如GPT\n\n**正确的混合方案**：\n\n**BART**：\n```python\nEncoder: BERT-like (双向)\nDecoder: GPT-like (单向)\n\n预训练: 去噪自编码\n→ 理解 + 生成都强！\n```\n\n**T5**：\n```python\nEncoder-Decoder架构\n所有任务转为Text-to-Text\n\n输入: "translate English to German: I love NLP"\n输出: "Ich liebe NLP"\n```\n\n**代码示例（强行用BERT生成）**：\n\n```python\nfrom transformers import BertForMaskedLM, BertTokenizer\nimport torch\n\ntokenizer = BertTokenizer.from_pretrained(\'bert-base-uncased\')\nmodel = BertForMaskedLM.from_pretrained(\'bert-base-uncased\')\n\n# 尝试生成\ntext = "[CLS] I love [MASK] [MASK] [MASK] [SEP]"\ninputs = tokenizer(text, return_tensors=\'pt\')\n\nfor step in range(3):\n    outputs = model(**inputs)\n    predictions = outputs.logits\n    \n    # 找到[MASK]位置\n    mask_indices = (inputs[\'input_ids\'] == tokenizer.mask_token_id).nonzero()\n    \n    if len(mask_indices) == 0:\n        break\n    \n    # 预测第一个[MASK]\n    first_mask = mask_indices[0, 1]\n    predicted_token = predictions[0, first_mask].argmax(dim=-1)\n    \n    # 替换\n    inputs[\'input_ids\'][0, first_mask] = predicted_token\n    \n    print(f"Step {step}: {tokenizer.decode(inputs[\'input_ids\'][0])}")\n\n# 输出很不自然！\n```\n\n**总结**：\n\nBERT设计用于：\n✓ 文本分类\n✓ 命名实体识别\n✓ 问答\n✓ 句子相似度\n✓ 所有理解任务\n\nBERT不适合：\n✗ 自由文本生成\n✗ 对话生成\n✗ 故事续写\n✗ 开放式生成\n\n**记住**：\n• BERT = Encoder = 理解\n• GPT = Decoder = 生成\n• BART/T5 = Both = 都行\n\n答案是**B：不适合，没有自回归能力**！\n\n用对的工具做对的事！'
    },
    {
        id: 122,
        type: '选择',
        topic: 'BERT',
        difficulty: '进阶',
        question: 'BERT的fine-tuning相比feature extraction的优势是什么？',
        options: [
            'A. Fine-tuning速度更快',
            'B. Fine-tuning可以调整BERT参数以适应特定任务，通常效果更好',
            'C. Fine-tuning不需要标注数据',
            'D. Fine-tuning参数更少'
        ],
        correct: 1,
        explanation: '**Fine-tuning vs Feature Extraction**：\n\n**两种使用BERT的方式**：\n\n---\n\n**1. Feature Extraction（特征提取）**：\n\n**做法**：\n```python\n# 冻结BERT，只训练顶层\nbert = BertModel.from_pretrained(\'bert-base-uncased\')\nbert.eval()  # 冻结\nfor param in bert.parameters():\n    param.requires_grad = False\n\n# 提取特征\nwith torch.no_grad():\n    features = bert(inputs)\n\n# 训练分类器\nclassifier = nn.Linear(768, num_classes)\nlogits = classifier(features[:, 0, :])  # [CLS]\n\nBERT参数不变，只学习分类器\n```\n\n**优点**：\n• ✓ **快速**：只训练少量参数\n• ✓ **内存少**：不需要保存BERT梯度\n• ✓ **稳定**：BERT不会过拟合\n• ✓ **灵活**：可以组合多层特征\n\n**缺点**：\n• ✗ **效果差**：BERT无法适应任务\n• ✗ **不专业**：预训练表示不一定最优\n\n---\n\n**2. Fine-tuning（微调）**：\n\n**做法**：\n```python\n# 解冻BERT，端到端训练\nbert = BertModel.from_pretrained(\'bert-base-uncased\')\nclassifier = nn.Linear(768, num_classes)\n\n# 组合成完整模型\nmodel = BertForSequenceClassification.from_pretrained(\n    \'bert-base-uncased\',\n    num_labels=num_classes\n)\n\n# 所有参数都训练！\noptimizer = AdamW(model.parameters(), lr=2e-5)\n\nfor batch in dataloader:\n    loss = model(**batch).loss\n    loss.backward()  # BERT参数也更新\n    optimizer.step()\n```\n\n**优点**：\n• ✓ **效果好**：BERT适应任务\n• ✓ **最优表示**：学习任务特定特征\n• ✓ **端到端**：统一优化\n\n**缺点**：\n• ✗ **慢**：训练110M参数\n• ✗ **内存大**：需要保存所有梯度\n• ✗ **可能过拟合**：数据少时风险大\n\n---\n\n**性能对比（实验数据）**：\n\n**SST-2（情感分类）**：\n```\nFeature Extraction:  89.3%\nFine-tuning:         93.5%  (+4.2%)\n```\n\n**MNLI（自然语言推理）**：\n```\nFeature Extraction:  81.2%\nFine-tuning:         86.7%  (+5.5%)\n```\n\n**NER（命名实体识别）**：\n```\nFeature Extraction:  F1 90.1%\nFine-tuning:         F1 92.8%  (+2.7%)\n```\n\n**SQuAD（问答）**：\n```\nFeature Extraction:  F1 85.3%\nFine-tuning:         F1 90.9%  (+5.6%)\n```\n\n**趋势**：Fine-tuning几乎总是更好！\n\n---\n\n**为什么Fine-tuning更好？**\n\n**1. 任务适应**：\n```python\n预训练: 学习通用语言知识\n"cat" 的表示适合所有任务\n\nFine-tuning: 调整为任务特定\n情感分类: "cat" → 中性\nNER: "cat" → 非实体\n问答: "cat" → 潜在答案\n\n不同任务需要不同的表示！\n```\n\n**2. 端到端优化**：\n```python\nFeature Extraction:\n  BERT → [固定特征] → Classifier\n  只优化Classifier，次优\n\nFine-tuning:\n  BERT → Classifier\n  联合优化，找到全局最优\n```\n\n**3. 低层也受益**：\n```python\n研究发现:\n  Fine-tuning时，BERT的低层也在变化\n  虽然变化小，但对最终效果有帮助\n  \n例如:\n  Layer 1: 学习任务相关的词法特征\n  Layer 6: 学习任务相关的句法特征\n  Layer 12: 学习任务相关的语义特征\n```\n\n---\n\n**何时用Feature Extraction？**\n\n**推荐场景**：\n• ✓ **数据极少**（<100样本）\n  - Fine-tuning会过拟合\n  - Feature + 简单分类器更安全\n\n• ✓ **计算资源有限**\n  - 单GPU，内存<8GB\n  - Fine-tuning太慢/放不下\n\n• ✓ **快速原型**\n  - 几分钟出结果\n  - 验证思路\n\n• ✓ **实时推理**\n  - 预提取特征，缓存\n  - 只跑轻量分类器\n\n**何时用Fine-tuning？**\n\n**推荐场景**：\n• ✓ **追求最佳性能**\n• ✓ **有足够数据**（>1000样本）\n• ✓ **有GPU资源**\n• ✓ **生产环境部署**\n\n---\n\n**训练成本对比**：\n\n**Feature Extraction**：\n```\nBERT-base分类:\n  训练时间: 10分钟\n  GPU内存: 2GB\n  只训练: Linear(768, 2) = 1.5K params\n```\n\n**Fine-tuning**：\n```\nBERT-base分类:\n  训练时间: 1-2小时\n  GPU内存: 12-16GB\n  训练: 110M params\n```\n\n---\n\n**混合方案**：\n\n**Layer-wise Fine-tuning**：\n```python\n# 只微调顶层，冻结底层\nfor i, layer in enumerate(bert.encoder.layer):\n    if i < 10:  # 冻结前10层\n        for param in layer.parameters():\n            param.requires_grad = False\n\n平衡效果和速度\n```\n\n**Gradual Unfreezing**：\n```python\nEpoch 1: 只训练分类器\nEpoch 2: 解冻最后2层BERT\nEpoch 3: 解冻最后4层BERT\n...\n\n逐步微调，防止catastrophic forgetting\n```\n\n**Discriminative Fine-tuning**：\n```python\n# 不同层用不同学习率\noptimizer = AdamW([\n    {\'params\': bert.embeddings.parameters(), \'lr\': 1e-5},\n    {\'params\': bert.encoder.layer[:6].parameters(), \'lr\': 2e-5},\n    {\'params\': bert.encoder.layer[6:].parameters(), \'lr\': 5e-5},\n    {\'params\': classifier.parameters(), \'lr\': 1e-4}\n])\n\n底层变化小，顶层变化大\n```\n\n---\n\n**代码对比**：\n\n**Feature Extraction**：\n```python\n# 简单快速\nbert = BertModel.from_pretrained(\'bert-base-uncased\')\nbert.eval()\n\nwith torch.no_grad():\n    outputs = bert(**inputs)\n    features = outputs.last_hidden_state[:, 0]\n\nclassifier = train_sklearn_classifier(features, labels)\n```\n\n**Fine-tuning**：\n```python\n# 完整训练\nmodel = BertForSequenceClassification.from_pretrained(\n    \'bert-base-uncased\', \n    num_labels=2\n)\n\noptimizer = AdamW(model.parameters(), lr=2e-5)\n\nfor epoch in range(3):\n    for batch in dataloader:\n        outputs = model(**batch)\n        loss = outputs.loss\n        loss.backward()\n        optimizer.step()\n        optimizer.zero_grad()\n```\n\n---\n\n**实践建议**：\n\n**起步**：\n1. 先试Feature Extraction（快速验证）\n2. 如果效果不够，再Fine-tuning\n\n**最终**：\n- 生产环境：Fine-tuning\n- 除非资源/数据严重受限\n\n**记住**：\n> Fine-tuning是BERT的标准用法\n> Feature Extraction是权宜之计\n\n答案是**B：Fine-tuning可以调整参数，效果更好**！'
    },
    {
        id: 123,        type: '选择',
        topic: 'BERT',
        difficulty: '进阶',
        question: 'BERT在处理句子对任务（如NLI）时，如何输入两个句子？',
        options: [
            'A. 分别输入，得到两个表示后concat',
            'B. 用[SEP]分隔，一次性输入：[CLS] SentA [SEP] SentB [SEP]',
            'C. 只输入第一个句子',
            'D. 用特殊的双编码器'
        ],
        correct: 1,
        explanation: '**BERT的句子对输入**：[SEP]分隔，segment IDs区分，一次编码，句子可交互。答案是**B**！'
    },
    {
        id: 131,
        type: '填空',
        topic: 'BERT',
        difficulty: '挑战',
        question: '请写出BERT中完整的输入表示计算公式（Token + Segment + Position）',
        answer: 'Input = TokenEmbedding(x) + SegmentEmbedding(s) + PositionEmbedding(p)',
        explanation: '**BERT输入 = Token Embedding + Segment Embedding + Position Embedding**。三种embedding元素级相加，形成最终输入表示。'
    },
    {
        id: 132,
        type: '填空',
        topic: 'BERT',
        difficulty: '挑战',
        question: 'BERT的预训练数据规模是多少GB？使用了哪些数据源？',
        answer: '约16GB，包括BooksCorpus（8亿词）和English Wikipedia（25亿词）',
        explanation: 'BERT使用约16GB文本数据预训练，主要来自BooksCorpus和Wikipedia，共约33亿词。RoBERTa后来使用了160GB，效果更好。'
    },
    {
        id: 133,
        type: '多选',
        topic: 'BERT',
        difficulty: '挑战',
        question: 'BERT成功的关键因素有哪些？（多选）',
        options: [
            'A. 双向Transformer编码器',
            'B. 大规模无监督预训练',
            'C. WordPiece tokenization',
            'D. 简单的fine-tuning范式'
        ],
        correct: [0, 1, 2, 3],
        explanation: 'BERT的成功是多因素综合的结果：双向建模、大规模预训练、WordPiece、易用的fine-tuning。全选！'
    },
    {
        id: 134,
        type: '填空',
        topic: 'BERT',
        difficulty: '挑战',
        question: 'BERT-base的学习率warmup步数是多少？为什么需要warmup？',
        answer: '通常4000-10000步；防止训练初期大学习率导致发散，让Adam优化器的二阶矩估计稳定',
        explanation: 'Warmup让学习率从0线性增长到峰值，然后衰减。防止初期参数方差大、梯度不稳定导致训练崩溃。'
    },
    {
        id: 135,
        type: '简答',
        topic: 'BERT',
        difficulty: '挑战',
        question: 'BERT和ELMo的主要区别是什么？为什么BERT更好？',
        answer: 'ELMo是浅层双向（独立的L2R和R2L LSTM拼接），BERT是深度双向（Transformer允许每层直接attend全序列）。BERT的双向建模更深入，表达能力更强',
        explanation: '**关键区别**：ELMo是shallow bi-directional，BERT是deep bi-directional。BERT的Self-Attention在每层都能看到完整上下文，建模能力远超LSTM拼接。'
    },
    {
        id: 136,
        type: '简答',
        topic: 'BERT',
        difficulty: '挑战',
        question: 'BERT在问答任务（如SQuAD）上如何使用？输入输出是什么？',
        answer: '输入：[CLS] Question [SEP] Paragraph [SEP]；输出：两个分类器分别预测答案的start和end位置，在paragraph的token级别预测',
        explanation: 'SQuAD任务：给定问题和段落，预测答案span。BERT输出每个token作为start/end的概率，取argmax找到答案位置。'
    },
    {
        id: 137,
        type: '简答',
        topic: 'BERT',
        difficulty: '挑战',
        question: '为什么BERT使用AdamW而不是普通的Adam优化器？',
        answer: 'AdamW将weight decay从梯度计算中解耦，直接在参数更新时应用L2正则。比Adam+L2更有效，防止过拟合效果更好',
        explanation: 'Adam中weight decay与adaptive learning rate交互，效果不佳。AdamW解耦后，weight decay独立作用，正则化更有效。'
    },
    {
        id: 138,
        type: '简答',
        topic: 'BERT',
        difficulty: '挑战',
        question: 'BERT的预训练和GPT的预训练有什么核心区别？',
        answer: 'BERT使用MLM（双向，mask预测），GPT使用CLM（单向，预测下一个词）。BERT适合理解任务，GPT适合生成任务',
        explanation: '**MLM vs CLM**：BERT看完整上下文填空，GPT只看历史预测下一词。这决定了两者的应用场景完全不同。'
    },
    {
        id: 139,
        type: '简答',
        topic: 'BERT',
        difficulty: '挑战',
        question: '什么是Catastrophic Forgetting？BERT的fine-tuning如何避免？',
        answer: 'Catastrophic Forgetting是指模型在新任务上训练时忘记预训练知识。BERT通过小学习率、短时间fine-tuning、warmup等技术避免',
        explanation: '小学习率（2e-5）让参数小幅调整而不是剧烈改变，保留预训练知识的同时适应新任务。'
    },
    {
        id: 140,
        type: '简答',
        topic: 'BERT',
        difficulty: '挑战',
        question: 'Sentence-BERT（SBERT）相比BERT在语义相似度任务上的改进是什么？',
        answer: 'BERT需要成对输入计算相似度（O(n²)），SBERT使用Siamese网络独立编码句子，可预计算向量后用cosine相似度（O(n)），快数千倍',
        explanation: 'SBERT通过对比学习训练，让句子向量在空间中的距离反映语义相似度，适合大规模语义搜索。'
    },
    {
        id: 141,
        type: '简答',
        topic: 'BERT',
        difficulty: '挑战',
        question: 'BERT为什么对标点符号敏感？如何解决？',
        answer: 'WordPiece会将标点作为独立token，在某些任务中标点成为spurious correlation。解决：数据增强（删除/替换标点）、adversarial training',
        explanation: 'BERT可能过度依赖标点做判断（如问号→疑问句）。数据增强和对抗训练能提高鲁棒性。'
    },
    {
        id: 142,
        type: '简答',
        topic: 'BERT',
        difficulty: '挑战',
        question: '如何评估BERT学到了多少语言学知识？有哪些probing方法？',
        answer: 'Probing方法：冻结BERT，在其隐藏层上训练简单分类器解决语言学任务（POS、NER、依存句法等），分类器准确率反映BERT包含该知识的程度',
        explanation: 'Probing发现：低层学词法/句法，高层学语义。这种分层表示是BERT强大的原因。'
    },
    {
        id: 143,
        type: '简答',
        topic: 'BERT',
        difficulty: '挑战',
        question: 'BERT的pooler_output和last_hidden_state[:,0,:]有什么区别？',
        options: [
            'A. 完全相同',
            'B. pooler_output是[CLS]经过额外Linear+Tanh',
            'C. pooler_output是所有token的平均池化',
            'D. pooler_output更大'
        ],
        correct: 1,
        explanation: '**pooler_output = tanh(Linear([CLS]))**，为NSP任务设计的额外变换。last_hidden_state[:,0,:]是原始[CLS]。fine-tuning时两者都可用，效果相近。'
    },
    {
        id: 144,
        type: '简答',
        topic: 'BERT',
        difficulty: '挑战',
        question: '未来BERT的改进方向有哪些？列举3个',
        answer: '1) 更长上下文（Sparse Attention）；2) 更高效训练（ELECTRA风格）；3) 多模态融合（图像+文本）；4) Few-shot能力；5) 可解释性',
        explanation: 'BERT开启了预训练时代，但仍有提升空间：效率、长度、多模态、少样本学习、可解释性等是重要研究方向。'
    },
    {
        id: 145,
        type: '选择',
        topic: 'BERT',
        difficulty: '进阶',
        question: 'BERT的Segment Embeddings有什么作用？',
        options: [
            'A. 区分不同句子，用于句子对任务',
            'B. 标记token位置',
            'C. 增加模型容量',
            'D. 用于分词'
        ],
        correct: 0,
        explanation: '**Segment Embeddings**：用于区分句子对中的两个句子。输入：[CLS] SentA [SEP] SentB [SEP]，segment IDs为0和1。帮助模型理解句子边界和关系，对NLI、QA等任务重要。只有两种segment（A和B），通过相加融入token表示。'
    },
    {
        id: 146,
        type: '多选',
        topic: 'BERT',
        difficulty: '进阶',
        question: '以下哪些是BERT的变体或改进模型？（多选）',
        options: [
            'A. RoBERTa',
            'B. ALBERT',
            'C. ELECTRA',
            'D. GPT-2'
        ],
        correct: [0, 1, 2],
        explanation: '**BERT家族**：RoBERTa（训练优化）、ALBERT（参数共享）、ELECTRA（判别式训练）都是BERT的改进。GPT-2是独立的生成式模型，使用Decoder架构，与BERT的Encoder架构不同，不是BERT变体。'
    },
    {
        id: 147,
        type: '选择',
        topic: 'BERT',
        difficulty: '进阶',
        question: 'BERT在微调(Fine-tuning)时，学习率通常应该：',
        options: [
            'A. 和预训练一样大',
            'B. 比预训练小很多（如1e-5到5e-5）',
            'C. 比预训练大',
            'D. 学习率不重要'
        ],
        correct: 1,
        explanation: '**Fine-tuning学习率**：2e-5到5e-5，比预训练小5-10倍。原因：预训练权重已经很好，大学习率会破坏已学知识（catastrophic forgetting）。小学习率让模型缓慢适应新任务，保留预训练知识。配合warmup和线性衰减效果最佳。'
    },
    {
        id: 148,
        type: '选择',
        topic: 'BERT',
        difficulty: '挑战',
        question: 'BERT-large和BERT-base的主要区别是什么？',
        options: [
            'A. BERT-large只是参数更多',
            'B. BERT-large有24层、1024维、16头，BERT-base有12层、768维、12头',
            'C. BERT-large使用不同的预训练任务',
            'D. BERT-large速度更快'
        ],
        correct: 1,
        explanation: '**BERT-base vs BERT-large**：\n- BERT-base: 12层、768维、12头、110M参数\n- BERT-large: 24层、1024维、16头、340M参数\nLarge模型效果更好（GLUE +2%），但训练和推理都慢3倍，需要更多GPU内存。预训练任务和架构相同，只是规模不同。'
    },
    {
        id: 149,
        type: '选择',
        topic: 'BERT',
        difficulty: '挑战',
        question: '关于BERT的位置编码，以下说法正确的是：',
        options: [
            'A. BERT使用固定的sin/cos位置编码',
            'B. BERT使用可学习的位置编码',
            'C. BERT不使用位置编码',
            'D. BERT的位置编码是通过attention计算的'
        ],
        correct: 1,
        explanation: '**BERT的Position Embeddings**：使用可学习的nn.Embedding(max_len=512, d_model=768)，而非Transformer原论文的sin/cos。优点：可以学习任务特定的位置表示；缺点：无法外推到>512的序列。与Token和Segment Embeddings相加后输入模型。'
    },
    {
        id: 150,
        type: '多选',
        topic: 'BERT',
        difficulty: '挑战',
        question: 'BERT的优化器和训练技巧有哪些？（多选）',
        options: [
            'A. AdamW优化器',
            'B. Learning rate warmup',
            'C. Gradient clipping',
            'D. Label smoothing'
        ],
        correct: [0, 1, 2, 3],
        explanation: '**BERT训练技巧（全选）**：\n- AdamW: 解耦weight decay，lr=1e-4（预训练）/2e-5（微调）\n- Warmup: 4000-10000步，防止初期发散\n- Gradient clipping: max_norm=1.0，防止梯度爆炸\n- Label smoothing: ε=0.1，防止过度自信\n还有：dropout=0.1、weight_decay=0.01、batch_size=256等。'
    },
    {
        id: 151,
        type: '选择',
        topic: 'BERT',
        difficulty: '挑战',
        question: 'BERT的预训练需要多长时间和多少计算资源？',
        options: [
            'A. 单GPU几天就够',
            'B. BERT-base: 4天（16个TPU），BERT-large: 4天（64个TPU）',
            'C. 需要几个月',
            'D. 普通电脑就能训练'
        ],
        correct: 1,
        explanation: '**BERT预训练成本**：BERT-base在16个Cloud TPU上训练4天，BERT-large在64个TPU上训练4天。计算量巨大（~10^20 FLOPS），普通GPU需要数月。这就是为什么大家都用预训练模型而不是从头训练。RoBERTa用了更多资源（500K steps on 1024 GPUs）效果更好。预训练成本是NLP民主化的障碍。'
    }
];
